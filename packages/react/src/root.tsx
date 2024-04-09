import { useFrame, useStore, useThree } from '@react-three/fiber'
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events'
import { forwardRef, ReactNode, RefAttributes, useEffect, useMemo, useRef } from 'react'
import { ParentProvider } from './context.js'
import { AddHandlers, usePropertySignals } from './utilts.js'
import { RootProperties, createRoot, reversePainterSortStable, unsubscribeSubscriptions } from '@pmndrs/uikit/internals'
import { Object3D } from 'three'
import { ComponentInternals, useComponentInternals } from './ref.js'

export const Root: (
  props: RootProperties & {
    children?: ReactNode
  } & EventHandlers &
    RefAttributes<ComponentInternals<RootProperties>>,
) => ReactNode = forwardRef((properties, ref) => {
  const renderer = useThree((state) => state.gl)

  useEffect(() => renderer.setTransparentSort(reversePainterSortStable), [renderer])
  const store = useStore()
  const outerRef = useRef<Object3D>(null)
  const innerRef = useRef<Object3D>(null)
  const propertySignals = usePropertySignals(properties)
  const internals = useMemo(
    () =>
      createRoot(
        propertySignals.style,
        propertySignals.properties,
        propertySignals.default,
        outerRef,
        innerRef,
        () => store.getState().camera,
        renderer,
      ),
    [store, propertySignals, renderer],
  )
  useEffect(() => () => unsubscribeSubscriptions(internals.subscriptions), [internals])

  useFrame((_, delta) => {
    for (const onFrame of internals.onFrameSet) {
      onFrame(delta)
    }
  })

  useComponentInternals(ref, propertySignals.style, internals, internals.interactionPanel)

  return (
    <AddHandlers userHandlers={properties} handlers={internals.handlers} ref={outerRef}>
      <primitive object={internals.interactionPanel} />
      <object3D ref={innerRef}>
        <ParentProvider value={internals}>{properties.children}</ParentProvider>
      </object3D>
    </AddHandlers>
  )
})
