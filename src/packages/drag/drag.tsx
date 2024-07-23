import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import { useDrag } from '@use-gesture/react'
import { useSpring, animated } from '@react-spring/web'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface DragState {
  offset: [x: number, y: number]
}
export interface DragProps extends BasicComponent {
  attract: boolean
  direction: 'x' | 'y' | 'lock' | undefined
  boundary: {
    top: number
    left: number
    right: number
    bottom: number
  }
  onDragStart: () => void
  onDragEnd: (state: DragState) => void
  onDrag: (state: DragState) => void
}
const defaultProps = {
  ...ComponentDefaults,
  attract: false,
  direction: undefined,
  boundary: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
} as DragProps
export const Drag: FunctionComponent<
  Partial<DragProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    attract,
    direction,
    boundary,
    onDrag,
    onDragStart,
    onDragEnd,
    children,
    className,
    style,
    ...reset
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-drag'
  const [boundaryState, setBoundaryState] = useState(boundary)
  const myDrag = useRef<HTMLDivElement>(null)
  const [currstyle, api] = useSpring(() => ({
    x: 0,
    y: 0,
  }))

  const middleLine = useRef(0)

  const getInfo = () => {
    const el = myDrag.current
    if (el) {
      const { offsetTop, offsetLeft } = el
      const { offsetWidth, offsetHeight } = el.querySelector(
        `.${classPrefix}-inner`
      ) as HTMLDivElement
      const { clientWidth, clientHeight } = document.documentElement
      const { top, left, bottom, right } = boundary
      setBoundaryState({
        top: -offsetTop + top,
        left: -offsetLeft + left,
        bottom: clientHeight - offsetHeight - offsetTop - bottom,
        right: clientWidth - offsetWidth - offsetLeft - right,
      })
      middleLine.current =
        clientWidth - offsetWidth - offsetLeft - (clientWidth - offsetWidth) / 2
    }
  }

  const bind = useDrag(
    (state) => {
      const {
        down,
        last,
        offset: [x, y],
        first,
      } = state
      first && onDragStart?.()
      onDrag?.({ offset: [x, y] })
      last && onDragEnd?.({ offset: [x, y] })
      api.start({ x, y, immediate: down })
      if (last) {
        if (direction !== 'y' && attract) {
          if (x < middleLine.current) {
            api.start({ x: boundaryState.left, y, immediate: down })
          } else {
            api.start({
              x: boundaryState.right,
              y,
              immediate: down,
            })
          }
        }
      }
    },
    {
      from: () => [currstyle.x.get(), currstyle.y.get()],
      axis: direction,
      bounds: boundaryState,
    }
  )

  useEffect(() => {
    getInfo()
  }, [myDrag])

  return (
    <div
      style={style}
      className={`${classPrefix} ${className}`}
      {...reset}
      ref={myDrag}
    >
      <animated.div
        style={currstyle}
        {...bind()}
        className={`${classPrefix}-inner`}
      >
        {children}
      </animated.div>
    </div>
  )
}

Drag.displayName = 'NutDrag'
