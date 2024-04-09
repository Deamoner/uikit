import { Object3D } from 'three'
import { ContainerProperties, createContainer } from '../components/container.js'
import { AllOptionalProperties, Properties } from '../properties/default.js'
import { Parent } from './index.js'
import { Signal, batch, signal } from '@preact/signals-core'
import { unsubscribeSubscriptions } from '../utils.js'
import { FontFamilies } from '../internals.js'
import { EventMap, bindHandlers } from './utils.js'

export class Container extends Object3D<EventMap> {
  private childrenContainer: Object3D
  public readonly internals: ReturnType<typeof createContainer>
  public readonly fontFamiliesSignal: Signal<FontFamilies | undefined>

  private readonly styleSignal: Signal<ContainerProperties | undefined> = signal(undefined)
  private readonly propertiesSignal: Signal<ContainerProperties | undefined>
  private readonly defaultPropertiesSignal: Signal<AllOptionalProperties | undefined>

  constructor(parent: Parent, properties?: ContainerProperties, defaultProperties?: AllOptionalProperties) {
    super()
    this.fontFamiliesSignal = parent.fontFamiliesSignal
    this.propertiesSignal = signal(properties)
    this.defaultPropertiesSignal = signal(defaultProperties)
    //setting up the threejs elements
    this.childrenContainer = new Object3D()
    this.childrenContainer.matrixAutoUpdate = false
    this.add(this.childrenContainer)
    this.matrixAutoUpdate = false
    parent.add(this)

    //setting up the container
    this.internals = createContainer(
      parent.internals,
      this.styleSignal,
      this.propertiesSignal,
      this.defaultPropertiesSignal,
      { current: this },
      { current: this.childrenContainer },
    )

    //setup events
    const { handlers, interactionPanel, subscriptions } = this.internals
    this.add(interactionPanel)
    bindHandlers(handlers, this, subscriptions)
  }

  setStyle(style: ContainerProperties | undefined) {
    this.styleSignal.value = style
  }

  setProperties(properties: ContainerProperties | undefined) {
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
