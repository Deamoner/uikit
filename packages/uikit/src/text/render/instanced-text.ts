import { Signal, effect, signal, untracked } from '@preact/signals-core'
import { InstancedGlyph } from './instanced-glyph.js'
import { Matrix4, Vector2Tuple, Vector3Tuple } from 'three'
import { ClippingRect } from '../../clipping.js'
import { ColorRepresentation, Subscriptions, alignmentXMap, alignmentYMap } from '../../utils.js'
import {
  getGlyphLayoutHeight,
  getGlyphOffsetX,
  getGlyphOffsetY,
  getOffsetToNextGlyph,
  getOffsetToNextLine,
} from '../utils.js'
import { GlyphGroupManager, InstancedGlyphGroup } from './instanced-glyph-group.js'
import { GlyphLayout, GlyphLayoutProperties, buildGlyphLayout, computedMeasureFunc } from '../layout.js'
import { SelectionBoxes } from '../../selection.js'
import { MergedProperties, FlexNode, computedProperty } from '../../internals.js'
import { OrderInfo } from '../../order.js'
import { Font } from '../font.js'

export type TextAlignProperties = {
  horizontalAlign?: keyof typeof alignmentXMap | 'block'
  verticalAlign?: keyof typeof alignmentYMap
}

export type TextAppearanceProperties = {
  color?: ColorRepresentation
  opacity?: number
}

const defaultVerticalAlign: keyof typeof alignmentYMap = 'top'
const defaultHorizontalAlign: keyof typeof alignmentXMap | 'block' = 'left'

export function createInstancedText(
  properties: Signal<MergedProperties>,
  textSignal: Signal<string | Signal<string> | Array<string | Signal<string>>>,
  matrix: Signal<Matrix4 | undefined>,
  node: FlexNode,
  isHidden: Signal<boolean> | undefined,
  parentClippingRect: Signal<ClippingRect | undefined> | undefined,
  orderInfo: Signal<OrderInfo>,
  fontSignal: Signal<Font | undefined>,
  glyphGroupManager: GlyphGroupManager,
  selectionRange: Signal<Vector2Tuple | undefined> | undefined,
  selectionBoxes: Signal<SelectionBoxes> | undefined,
  caretPosition: Signal<Vector3Tuple | undefined> | undefined,
  instancedTextRef: { current?: InstancedText } | undefined,
  subscriptions: Subscriptions,
) {
  let layoutPropertiesRef: { current: GlyphLayoutProperties | undefined } = { current: undefined }

  const measureFunc = computedMeasureFunc(properties, fontSignal, textSignal, layoutPropertiesRef)
  const verticalAlign = computedProperty(properties, 'verticalAlign', defaultVerticalAlign)
  const horizontalAlign = computedProperty(properties, 'horizontalAlign', defaultHorizontalAlign)
  const color = computedProperty(properties, 'color', 0x0)
  const opacity = computedProperty(properties, 'opacity', 1)

  const layoutSignal = signal<GlyphLayout | undefined>(undefined)
  subscriptions.push(
    node.addLayoutChangeListener(() => {
      const layoutProperties = layoutPropertiesRef.current
      if (layoutProperties == null) {
        return
      }
      const { size, paddingInset, borderInset } = node
      const [width, height] = size.value
      const [pTop, pRight, pBottom, pLeft] = paddingInset.value
      const [bTop, bRight, bBottom, bLeft] = borderInset.value
      const actualWidth = width - pRight - pLeft - bRight - bLeft
      const actualheight = height - pTop - pBottom - bTop - bBottom
      layoutSignal.value = buildGlyphLayout(layoutProperties, actualWidth, actualheight)
    }),
    effect(() => {
      const font = fontSignal.value
      if (font == null) {
        return
      }
      const instancedText = new InstancedText(
        glyphGroupManager.getGroup(orderInfo.value.majorIndex, font),
        horizontalAlign,
        verticalAlign,
        color,
        opacity,
        layoutSignal,
        matrix,
        isHidden,
        parentClippingRect,
        selectionRange,
        selectionBoxes,
        caretPosition,
      )
      if (instancedTextRef != null) {
        instancedTextRef.current = instancedText
      }
      return () => instancedText.destroy()
    }),
  )

  return measureFunc
}

const noSelectionBoxes: SelectionBoxes = []

export class InstancedText {
  private glyphLines: Array<Array<InstancedGlyph | number>> = []
  private lastLayout: GlyphLayout | undefined

  private unsubscribeInitialList: Array<() => void> = []

  private unsubscribeShowList: Array<() => void> = []

  constructor(
    private group: InstancedGlyphGroup,
    private horizontalAlign: Signal<keyof typeof alignmentXMap | 'block'>,
    private verticalAlign: Signal<keyof typeof alignmentYMap>,
    private color: Signal<ColorRepresentation>,
    private opacity: Signal<number>,
    private layoutSignal: Signal<GlyphLayout | undefined>,
    private matrix: Signal<Matrix4 | undefined>,
    isHidden: Signal<boolean> | undefined,
    private parentClippingRect: Signal<ClippingRect | undefined> | undefined,
    private selectionRange: Signal<Vector2Tuple | undefined> | undefined,
    private selectionBoxes: Signal<SelectionBoxes> | undefined,
    private caretPosition: Signal<Vector3Tuple | undefined> | undefined,
  ) {
    this.unsubscribeInitialList = [
      effect(() => {
        if (isHidden?.value === true || opacity.value < 0.01) {
          this.hide()
          return
        }
        this.show()
      }),
      effect(() =>
        this.updateSelectionBoxes(this.lastLayout, selectionRange?.value, verticalAlign.peek(), horizontalAlign.peek()),
      ),
    ]
  }

  public getCharIndex(x: number, y: number): number {
    const layout = this.lastLayout
    if (layout == null) {
      return 0
    }
    y -= -getYOffset(layout, this.verticalAlign.peek())
    const lineIndex = Math.floor(y / -getOffsetToNextLine(layout.lineHeight, layout.fontSize))
    const lines = layout.lines
    if (lineIndex < 0 || lines.length === 0) {
      return 0
    }
    if (lineIndex >= lines.length) {
      const lastLine = lines[lines.length - 1]
      return lastLine.charIndexOffset + lastLine.charLength + 1
    }

    const line = lines[lineIndex]
    const whitespaceWidth = layout.font.getGlyphInfo(' ').xadvance * layout.fontSize
    const glyphs = this.glyphLines[lineIndex]
    let glyphsLength = glyphs.length
    for (let i = 0; i < glyphsLength; i++) {
      const entry = glyphs[i]
      if (x < this.getGlyphX(entry, 0.5, whitespaceWidth) + layout.availableWidth / 2) {
        return i + line.charIndexOffset
      }
    }
    return line.charIndexOffset + line.charLength + 1
  }

  private updateSelectionBoxes(
    layout: GlyphLayout | undefined,
    range: Vector2Tuple | undefined,
    verticalAlign: keyof typeof alignmentYMap,
    horizontalAlign: keyof typeof alignmentXMap | 'block',
  ): void {
    if (this.caretPosition == null || this.selectionBoxes == null) {
      return
    }
    if (range == null || layout == null || layout.lines.length === 0) {
      this.caretPosition.value = undefined
      this.selectionBoxes.value = noSelectionBoxes
      return
    }
    const whitespaceWidth = layout.font.getGlyphInfo(' ').xadvance * layout.fontSize
    const [startCharIndexIncl, endCharIndexExcl] = range
    if (endCharIndexExcl <= startCharIndexIncl) {
      const { lineIndex, x } = this.getGlyphLineAndX(layout, endCharIndexExcl, true, whitespaceWidth, horizontalAlign)
      const y = -(
        getYOffset(layout, verticalAlign) -
        layout.availableHeight / 2 +
        lineIndex * getOffsetToNextLine(layout.lineHeight, layout.fontSize) +
        getGlyphOffsetY(layout.fontSize, layout.lineHeight)
      )
      this.caretPosition.value = [x, y - layout.fontSize / 2, layout.fontSize]
      this.selectionBoxes.value = []
      return
    }
    this.caretPosition.value = undefined
    const start = this.getGlyphLineAndX(layout, startCharIndexIncl, true, whitespaceWidth, horizontalAlign)
    const end = this.getGlyphLineAndX(layout, endCharIndexExcl - 1, false, whitespaceWidth, horizontalAlign)
    if (start.lineIndex === end.lineIndex) {
      this.selectionBoxes.value = [
        this.computeSelectionBox(start.lineIndex, start.x, end.x, layout, verticalAlign, whitespaceWidth),
      ]
      return
    }
    const newSelectionBoxes: SelectionBoxes = [
      this.computeSelectionBox(start.lineIndex, start.x, undefined, layout, verticalAlign, whitespaceWidth),
    ]
    for (let i = start.lineIndex + 1; i < end.lineIndex; i++) {
      newSelectionBoxes.push(this.computeSelectionBox(i, undefined, undefined, layout, verticalAlign, whitespaceWidth))
    }
    newSelectionBoxes.push(
      this.computeSelectionBox(end.lineIndex, undefined, end.x, layout, verticalAlign, whitespaceWidth),
    )
    this.selectionBoxes.value = newSelectionBoxes
  }

  private computeSelectionBox(
    lineIndex: number,
    startX: number | undefined,
    endX: number | undefined,
    layout: GlyphLayout,
    verticalAlign: keyof typeof alignmentYMap,
    whitespaceWidth: number,
  ): SelectionBoxes[number] {
    const lineGlyphs = this.glyphLines[lineIndex]
    if (startX == null) {
      startX = this.getGlyphX(lineGlyphs[0], 0, whitespaceWidth)
    }
    if (endX == null) {
      endX = this.getGlyphX(lineGlyphs[lineGlyphs.length - 1], 1, whitespaceWidth)
    }
    const y = -(
      getYOffset(layout, verticalAlign) -
      layout.availableHeight / 2 +
      lineIndex * getOffsetToNextLine(layout.lineHeight, layout.fontSize) +
      getGlyphOffsetY(layout.fontSize, layout.lineHeight)
    )
    const width = endX - startX
    const height = layout.fontSize + layout.lineHeight
    return { position: [startX + width / 2, y - height / 2], size: [width, height] }
  }

  private getGlyphLineAndX(
    { lines, availableWidth }: GlyphLayout,
    charIndex: number,
    start: boolean,
    whitespaceWidth: number,
    horizontalAlign: keyof typeof alignmentXMap | 'block',
  ): { lineIndex: number; x: number } {
    const linesLength = lines.length
    for (let lineIndex = 0; lineIndex < linesLength; lineIndex++) {
      const line = lines[lineIndex]
      if (charIndex >= line.charIndexOffset + line.charLength) {
        continue
      }
      //line found
      const glyphEntry = this.glyphLines[lineIndex][Math.max(charIndex - line.charIndexOffset, 0)]
      return { lineIndex, x: this.getGlyphX(glyphEntry, start ? 0 : 1, whitespaceWidth) }
    }
    const lastLine = lines[linesLength - 1]
    if (lastLine.charLength === 0) {
      return {
        lineIndex: linesLength - 1,
        x: getXOffset(availableWidth, lastLine.nonWhitespaceWidth, horizontalAlign) - availableWidth / 2,
      }
    }
    const lastGlyphEntry = this.glyphLines[linesLength - 1][lastLine.charLength - 1]
    return { lineIndex: linesLength - 1, x: this.getGlyphX(lastGlyphEntry, 1, whitespaceWidth) }
  }

  private getGlyphX(entry: number | InstancedGlyph, widthMultiplier: number, whitespaceWidth: number) {
    if (typeof entry === 'number') {
      return entry + widthMultiplier * whitespaceWidth
    }
    return entry.getX(widthMultiplier)
  }

  private show() {
    if (this.unsubscribeShowList.length > 0) {
      return
    }
    traverseGlyphs(this.glyphLines, (glyph) => glyph.show())
    this.unsubscribeShowList.push(
      effect(() => {
        const matrix = this.matrix.value
        if (matrix == null) {
          return
        }
        traverseGlyphs(this.glyphLines, (glyph) => glyph.updateBaseMatrix(matrix))
      }),
      effect(() => {
        const clippingRect = this.parentClippingRect?.value
        traverseGlyphs(this.glyphLines, (glyph) => glyph.updateClippingRect(clippingRect))
      }),
      effect(() => {
        const color = this.color.value
        traverseGlyphs(this.glyphLines, (glyph) => glyph.updateColor(color))
      }),
      effect(() => {
        const opacity = this.opacity.value
        traverseGlyphs(this.glyphLines, (glyph) => glyph.updateOpacity(opacity))
      }),
      effect(() => {
        const layout = this.layoutSignal.value
        if (layout == null) {
          return
        }
        const { text, font, lines, letterSpacing = 0, fontSize = 16, lineHeight = 1.2, availableWidth } = layout

        let y = getYOffset(layout, this.verticalAlign.value) - layout.availableHeight / 2

        const linesLength = lines.length
        const pixelSize = this.group.pixelSize
        for (let lineIndex = 0; lineIndex < linesLength; lineIndex++) {
          if (lineIndex === this.glyphLines.length) {
            this.glyphLines.push([])
          }

          const {
            whitespacesBetween,
            nonWhitespaceWidth,
            charIndexOffset: firstNonWhitespaceCharIndex,
            nonWhitespaceCharLength,
            charLength,
          } = lines[lineIndex]

          let offsetPerWhitespace =
            this.horizontalAlign.value === 'block' ? (availableWidth - nonWhitespaceWidth) / whitespacesBetween : 0
          let x = getXOffset(availableWidth, nonWhitespaceWidth, this.horizontalAlign.value) - availableWidth / 2

          let prevGlyphId: number | undefined
          const glyphs = this.glyphLines[lineIndex]

          for (
            let charIndex = firstNonWhitespaceCharIndex;
            charIndex < firstNonWhitespaceCharIndex + charLength;
            charIndex++
          ) {
            const glyphIndex = charIndex - firstNonWhitespaceCharIndex
            const char = text[charIndex]
            const glyphInfo = font.getGlyphInfo(char)
            if (char === ' ' || charIndex > nonWhitespaceCharLength + firstNonWhitespaceCharIndex) {
              prevGlyphId = glyphInfo.id
              const xPosition = x + getGlyphOffsetX(font, fontSize, glyphInfo, prevGlyphId)
              if (typeof glyphs[glyphIndex] === 'number') {
                glyphs[glyphIndex] = x
              } else {
                glyphs.splice(glyphIndex, 0, xPosition)
              }
              x += offsetPerWhitespace + getOffsetToNextGlyph(fontSize, glyphInfo, letterSpacing)
              continue
            }
            //non space character
            //delete undefined entries so we find a reusable glyph
            let glyphOrNumber = glyphs[glyphIndex]
            while (glyphIndex < glyphs.length && typeof glyphOrNumber == 'number') {
              glyphs.splice(glyphIndex, 1)
              glyphOrNumber = glyphs[glyphIndex]
            }
            //the prev. loop assures that glyphOrNumber is a InstancedGlyph or undefined
            let glyph = glyphOrNumber as InstancedGlyph
            if (glyph == null) {
              //no reusable glyph found
              glyphs[glyphIndex] = glyph = new InstancedGlyph(
                this.group,
                this.matrix.peek(),
                this.color.peek(),
                this.opacity.peek(),
                this.parentClippingRect?.peek(),
              )
            }
            glyph.updateGlyphAndTransformation(
              glyphInfo,
              x + getGlyphOffsetX(font, fontSize, glyphInfo, prevGlyphId),
              -(y + getGlyphOffsetY(fontSize, lineHeight, glyphInfo)),
              fontSize,
              pixelSize,
            )
            glyph.show()
            prevGlyphId = glyphInfo.id
            x += getOffsetToNextGlyph(fontSize, glyphInfo, letterSpacing)
          }

          y += getOffsetToNextLine(lineHeight, fontSize)

          //remove unnecassary glyphs
          const glyphsLength = glyphs.length
          const newGlyphsLength = charLength
          for (let ii = newGlyphsLength; ii < glyphsLength; ii++) {
            const glyph = glyphs[ii]
            if (typeof glyph === 'number') {
              continue
            }
            glyph.hide()
          }
          glyphs.length = newGlyphsLength
        }
        //remove unnecassary glyph lines
        traverseGlyphs(this.glyphLines, (glyph) => glyph.hide(), linesLength)
        this.glyphLines.length = linesLength
        this.lastLayout = layout
        this.updateSelectionBoxes(
          layout,
          this.selectionRange?.peek(),
          this.verticalAlign.value,
          this.horizontalAlign.value,
        )
      }),
    )
  }

  private hide() {
    const unsubscribeListLength = this.unsubscribeShowList.length
    if (unsubscribeListLength === 0) {
      return
    }
    for (let i = 0; i < unsubscribeListLength; i++) {
      this.unsubscribeShowList[i]()
    }
    this.unsubscribeShowList.length = 0
    traverseGlyphs(this.glyphLines, (glyph) => glyph.hide())
  }

  destroy(): void {
    this.hide()
    this.glyphLines.length = 0
    const length = this.unsubscribeInitialList.length
    for (let i = 0; i < length; i++) {
      this.unsubscribeInitialList[i]()
    }
  }
}

function getXOffset(
  availableWidth: number,
  nonWhitespaceWidth: number,
  horizontalAlign: keyof typeof alignmentXMap | 'block',
) {
  switch (horizontalAlign) {
    case 'right':
      return availableWidth - nonWhitespaceWidth
    case 'center':
      return (availableWidth - nonWhitespaceWidth) / 2
    default:
      return 0
  }
}

function getYOffset(layout: GlyphLayout, verticalAlign: keyof typeof alignmentYMap) {
  switch (verticalAlign) {
    case 'center':
      return (layout.availableHeight - getGlyphLayoutHeight(layout.lines.length, layout)) / 2
    case 'bottom':
      return layout.availableHeight - getGlyphLayoutHeight(layout.lines.length, layout)
    default:
      return 0
  }
}

function traverseGlyphs(
  glyphLines: Array<Array<InstancedGlyph | number>>,
  fn: (glyph: InstancedGlyph) => void,
  offset: number = 0,
): void {
  const glyphLinesLength = glyphLines.length
  for (let i = offset; i < glyphLinesLength; i++) {
    const glyphs = glyphLines[i]
    const glyphsLength = glyphs.length
    for (let ii = 0; ii < glyphsLength; ii++) {
      const glyph = glyphs[ii]
      if (typeof glyph == 'number') {
        continue
      }
      fn(glyph)
    }
  }
}
