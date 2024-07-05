import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import { getSystemInfoSync, createSelectorQuery } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { getRectByTaro } from '@/utils/get-rect-by-taro'

export interface DragProps extends BasicComponent {
  attract: boolean
  direction: 'x' | 'y' | 'lock' | undefined
  boundary: {
    top: number
    left: number
    right: number
    bottom: number
  }
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
  className: 'myDrag',
} as DragProps
export const Drag: FunctionComponent<
  Partial<DragProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { attract, direction, boundary, children, className, style, ...reset } =
    {
      ...defaultProps,
      ...props,
    }
  const classPrefix = 'nut-drag'
  const [boundaryState, setBoundaryState] = useState(boundary)
  const myDrag = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)
  const [currstyle, setCurrStyle] = useState({})
  const timer = useRef(0)

  const axisCache = useRef({ x: 0, y: 0 })
  const transformCache = useRef({ x: 0, y: 0 })
  const translateX = useRef(0)
  const translateY = useRef(0)
  const middleLine = useRef(0)

  const getInfo = async () => {
    const el = myDrag.current
    if (el) {
      const { top, left, bottom, right } = boundary
      const { screenWidth, windowHeight } = getSystemInfoSync()

      const { width, height } = await getRectByTaro(dragRef.current)
      dragRef.current?.getBoundingClientRect()
      createSelectorQuery()
        .select(`.${className}`)
        .boundingClientRect((rec: any) => {
          setBoundaryState({
            top: -rec.top + top,
            left: -rec.left + left,
            bottom: windowHeight - rec.top - bottom - Math.ceil(height),
            right: screenWidth - rec.left - right - Math.ceil(width),
          })

          middleLine.current =
            screenWidth - rec.width - rec.left - (screenWidth - rec.width) / 2
        })
        .exec()
    }
  }

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement
    const touches = e.touches[0]
    axisCache.current = { x: touches.clientX, y: touches.clientY }
    transformCache.current = { x: translateX.current, y: translateY.current }
  }

  const touchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && dragRef.current) {
      const touch = e.touches[0]
      const x = touch.clientX - axisCache.current.x
      const y = touch.clientY - axisCache.current.y
      translateX.current = x + transformCache.current.x
      translateY.current = y + transformCache.current.y

      // 边界判断
      if (translateX.current < boundaryState.left) {
        translateX.current = boundaryState.left
      } else if (translateX.current > boundaryState.right) {
        translateX.current = boundaryState.right
      }
      if (translateY.current < boundaryState.top) {
        translateY.current = boundaryState.top
      } else if (translateY.current > boundaryState.bottom) {
        translateY.current = boundaryState.bottom
      }

      const transform = `translate3d(${
        direction !== 'y' ? translateX.current : 0
      }px, ${direction !== 'x' ? translateY.current : 0}px, 0px)`

      setCurrStyle({ transform })
    }
  }

  const touchEnd = (e: React.TouchEvent) => {
    if (direction !== 'y' && attract && dragRef.current) {
      if (translateX.current < middleLine.current) {
        translateX.current = boundaryState.left
      } else {
        translateX.current = boundaryState.right
      }
      const transform = `translate3d(${translateX.current}px, ${
        direction !== 'x' ? translateY.current : 0
      }px, 0px)`
      setCurrStyle({ transform })
    }
  }

  useEffect(() => {
    timer.current = window.setTimeout(() => {
      getInfo()
    }, 300)

    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <div
      style={style}
      className={`${classPrefix} ${className}`}
      {...reset}
      ref={myDrag}
    >
      <div
        className={`${classPrefix}-inner`}
        onTouchStart={(event) => touchStart(event)}
        ref={dragRef}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
        // eslint-disable-next-line react/no-unknown-property
        style={currstyle}
      >
        {children}
      </div>
    </div>
  )
}

Drag.displayName = 'NutDrag'
