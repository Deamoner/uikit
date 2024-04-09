import { effect } from '@preact/signals-core'
import {
  ComponentPropsWithoutRef,
  ReactNode,
  RefAttributes,
  RefObject,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { HalfFloatType, LinearFilter, Scene, WebGLRenderTarget } from 'three'
import { Image } from './image.js'
import { InjectState, RootState, createPortal, useFrame, useStore } from '@react-three/fiber'
import type { DomEvent, EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events.js'
import type { ImageProperties } from '@pmndrs/uikit/internals'
import type { ComponentInternals } from './ref.js'

export type PortalProperties = {
  frames?: number
  renderPriority?: number
  eventPriority?: number
  resolution?: number
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof Image>, 'src' | 'fit'>

export const Portal: (
  props: PortalProperties &
    EventHandlers &
    RefAttributes<ComponentInternals<PortalProperties>> & {
      children?: ReactNode
    },
) => ReactNode = forwardRef(
  ({ children, resolution = 1, frames = Infinity, renderPriority = 0, eventPriority = 0, ...props }, ref) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fbo = useMemo(
      () =>
        new WebGLRenderTarget(1, 1, {
          minFilter: LinearFilter,
          magFilter: LinearFilter,
          type: HalfFloatType,
        }),
      [],
    )
    const imageRef = useRef<ComponentInternals<ImageProperties>>(null)
    const injectState = useMemo<InjectState>(
      () => ({
        events: { compute: uvCompute.bind(null, imageRef), priority: eventPriority },
        size: { width: 1, height: 1, left: 0, top: 0 },
      }),
      [eventPriority],
    )
    useEffect(() => {
      if (imageRef.current == null) {
        return
      }
      const { size } = imageRef.current
      const unsubscribeSetSize = effect(() => {
        const [width, height] = size.value
        fbo.setSize(width, height)
        injectState.size!.width = width
        injectState.size!.height = height
      })
      return () => {
        unsubscribeSetSize()
        fbo.dispose()
      }
    }, [fbo, injectState])
    useImperativeHandle(ref, () => imageRef.current!, [])
    const vScene = useMemo(() => new Scene(), [])
    return (
      <>
        {createPortal(
          <ChildrenToFBO imageRef={imageRef} renderPriority={renderPriority} frames={frames} fbo={fbo}>
            {children}
            {/* Without an element that receives pointer events state.pointer will always be 0/0 */}
            <group onPointerOver={() => null} />
          </ChildrenToFBO>,
          vScene,
          injectState,
        )}
        <Image {...props} src={fbo.texture} fit="fill" keepAspectRatio={false} ref={imageRef} />
      </>
    )
  },
)

function uvCompute(
  { current }: RefObject<ComponentInternals<ImageProperties>>,
  event: DomEvent,
  state: RootState,
  previous?: RootState,
) {
  if (current == null || previous == null) {
    return false
  }
  // First we call the previous state-onion-layers compute, this is what makes it possible to nest portals
  if (!previous.raycaster.camera) previous.events.compute?.(event, previous, previous.previousRoot?.getState())
  // We run a quick check against the parent, if it isn't hit there's no need to raycast at all
  const [intersection] = previous.raycaster.intersectObject(current.interactionPanel)
  if (!intersection) return false
  // We take that hits uv coords, set up this layers raycaster, et voilà, we have raycasting on arbitrary surfaces
  const uv = intersection.uv
  if (!uv) return false
  state.raycaster.setFromCamera(state.pointer.set(uv.x * 2 - 1, uv.y * 2 - 1), state.camera)
}

function ChildrenToFBO({
  frames,
  renderPriority,
  children,
  fbo,
  imageRef,
}: {
  frames: number
  renderPriority: number
  children: ReactNode
  fbo: WebGLRenderTarget
  imageRef: RefObject<ComponentInternals<ImageProperties>>
}) {
  const store = useStore()
  useEffect(() => {
    if (imageRef.current == null) {
      return
    }
    const { size } = imageRef.current
    return effect(() => {
      const [width, height] = size.value
      store.setState({ size: { width, height, top: 0, left: 0 } })
    })
  })
  let count = 0
  let oldAutoClear
  let oldXrEnabled
  useFrame((state) => {
    if (frames === Infinity || count < frames) {
      oldAutoClear = state.gl.autoClear
      oldXrEnabled = state.gl.xr.enabled
      state.gl.autoClear = true
      state.gl.xr.enabled = false
      state.gl.setRenderTarget(fbo)
      state.gl.render(state.scene, state.camera)
      state.gl.setRenderTarget(null)
      state.gl.autoClear = oldAutoClear
      state.gl.xr.enabled = oldXrEnabled
      count++
    }
  }, renderPriority)
  return <>{children}</>
}
