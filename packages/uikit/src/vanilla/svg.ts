import { Object3D } from 'three'
import { AllOptionalProperties } from '../properties/default.js'
import { Parent } from './index.js'
import { bindHandlers } from './utils.js'
import { Signal, batch, signal } from '@preact/signals-core'
import { unsubscribeSubscriptions } from '../utils.js'
import { SvgProperties, createSvg } from '../components/svg.js'
import { FontFamilies } from '../internals.js'

export class Svg extends Object3D {
  public readonly internals: ReturnType<typeof createSvg>
  public readonly fontFamiliesSignal: Signal<FontFamilies | undefined>

  private readonly childrenContainer: Object3D
  private readonly styleSignal: Signal<SvgProperties | undefined> = signal(undefined)
  private readonly propertiesSignal: Signal<SvgProperties | undefined>
  private readonly defaultPropertiesSignal: Signal<AllOptionalProperties | undefined>
  private readonly srcSignal: Signal<string | Signal<string>>

  constructor(
    parent: Parent,
    src: string | Signal<string>,
    properties?: SvgProperties,
    defaultProperties?: AllOptionalProperties,
  ) {
    super()
    this.fontFamiliesSignal = parent.fontFamiliesSignal
    this.srcSignal = signal(src)
    this.propertiesSignal = signal(properties)
    this.defaultPropertiesSignal = signal(defaultProperties)
    this.childrenContainer = new Object3D()
    this.childrenContainer.matrixAutoUpdate = false
    this.add(this.childrenContainer)
    this.matrixAutoUpdate = false
    parent.add(this)
    this.internals = createSvg(
      parent.internals,
      this.srcSignal,
      this.styleSignal,
      this.propertiesSignal,
      this.defaultPropertiesSignal,
      { current: this },
      { current: this.childrenContainer },
    )

    const { handlers, centerGroup, interactionPanel, subscriptions } = this.internals
    this.add(interactionPanel)
    this.add(centerGroup)
    bindHandlers(handlers, this, subscriptions)
  }

  setSrc(src: string | Signal<string>) {
    this.srcSignal.value = src
  }

  setStyle(style: SvgProperties | undefined) {
    this.styleSignal.value = style
  }

  setProperties(properties: SvgProperties | undefined) {
    this.propertiesSignal.value = properties
  }

  setDefaultProperties(properties: AllOptionalProperties) {
    this.defaultPropertiesSignal.value = properties
  }

  destroy() {
    this.parent?.remove(this)
    unsubscribeSubscriptions(this.internals.subscriptions)
  }
}
