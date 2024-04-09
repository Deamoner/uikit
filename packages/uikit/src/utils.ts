import { computed, Signal } from '@preact/signals-core'
import { Vector2Tuple, Color, Vector3Tuple } from 'three'
import { Inset } from './flex/node.js'
import { MergedProperties } from './properties/merged.js'
import { computedProperty } from './internals.js'

export type ColorRepresentation = Color | string | number | Vector3Tuple

export type Subscriptions = Array<() => void>

export function unsubscribeSubscriptions(subscriptions: Subscriptions): void {
  const length = subscriptions.length
  for (let i = 0; i < length; i++) {
    subscriptions[i]()
  }
  subscriptions.length = 0
}

export const alignmentXMap = { left: 0.5, center: 0, right: -0.5 }
export const alignmentYMap = { top: -0.5, center: 0, bottom: 0.5 }
export const alignmentZMap = { back: -0.5, center: 0, front: 0.5 }

/**
 * calculates the offsetX, offsetY, and scale to fit content with size [aspectRatio, 1] inside
 */
export function fitNormalizedContentInside(
  size: Signal<Vector2Tuple>,
  paddingInset: Signal<Inset>,
  borderInset: Signal<Inset>,
  pixelSize: number,
  aspectRatio: number,
): [offsetX: number, offsetY: number, scale: number] {
  const [width, height] = size.value
  const [pTop, pRight, pBottom, pLeft] = paddingInset.value
  const [bTop, bRight, bBottom, bLeft] = borderInset.value
  const topInset = pTop + bTop
  const rightInset = pRight + bRight
  const bottomInset = pBottom + bBottom
  const leftInset = pLeft + bLeft

  const innerWidth = width - leftInset - rightInset
  const innerHeight = height - topInset - bottomInset
  const flexRatio = innerWidth / innerHeight
  let scaling = 1
  if (flexRatio > aspectRatio) {
    scaling = innerHeight * pixelSize
  } else {
    scaling = (innerWidth * pixelSize) / aspectRatio
  }
  return [(leftInset - rightInset) * 0.5 * pixelSize, (bottomInset - topInset) * 0.5 * pixelSize, scaling]
}

export function readReactive<T>(value: T | Signal<T>): T {
  return value instanceof Signal ? value.value : value
}

export function createConditionalPropertyTranslator(condition: () => boolean) {
  const signalMap = new Map<unknown, Signal<unknown>>()
  return (properties: unknown, merged: MergedProperties) => {
    if (typeof properties != 'object') {
      throw new Error(`Invalid properties "${properties}"`)
    }
    for (const key in properties) {
      const value = properties[key as never]
      if (value === undefined) {
        return
      }
      let result = signalMap.get(value)
      if (result == null) {
        signalMap.set(value, (result = computed(() => (condition() ? readReactive(value) : undefined))))
      }
      merged.add(key, result)
    }
  }
}

export function computedBorderInset(
  propertiesSignal: Signal<MergedProperties>,
  keys: ReadonlyArray<string>,
): Signal<Inset> {
  const sizes = keys.map((key) => computedProperty(propertiesSignal, key, 0))
  return computed(() => sizes.map((size) => size.value) as Inset)
}
