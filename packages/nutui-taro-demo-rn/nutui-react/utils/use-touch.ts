import React, { useRef } from 'react'

const MIN_DISTANCE = 10

type Direction = '' | 'vertical' | 'horizontal'

function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }
  return ''
}

export function useTouch() {
  const startX = useRef(0)
  const startY = useRef(0)
  const deltaX = useRef(0)
  const deltaY = useRef(0)
  const delta = useRef(0)
  const offsetX = useRef(0)
  const offsetY = useRef(0)
  const direction = useRef<Direction>('')
  const touchTime = useRef<number | null>(null)

  const isVertical = () => direction.current === 'vertical'
  const isHorizontal = () => direction.current === 'horizontal'

  const reset = () => {
    touchTime.current = null
    deltaX.current = 0
    deltaY.current = 0
    offsetX.current = 0
    offsetY.current = 0
    direction.current = ''
  }

  const getX = (touch: React.Touch) => {
    return touch.screenX || touch.clientX
  }

  const getY = (touch: React.Touch) => {
    return touch.screenY || touch.clientY
  }

  const start = (event: React.TouchEvent<HTMLElement>) => {
    reset()
    touchTime.current = Date.now()
    startX.current = getX(event.touches[0])
    startY.current = getY(event.touches[0])
  }

  const move = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches[0]
    const clientX = getX(touch)
    const clientY = getY(touch)
    // Fix: Safari back will set clientX to negative number
    deltaX.current = clientX < 0 ? 0 : clientX - startX.current
    deltaY.current = clientY - startY.current
    offsetX.current = Math.abs(deltaX.current)
    offsetY.current = Math.abs(deltaY.current)
    delta.current = isVertical() ? deltaY.current : deltaX.current

    if (!direction.current) {
      direction.current = getDirection(offsetX.current, offsetY.current)
    }
  }

  return {
    move,
    start,
    reset,
    touchTime,
    startX,
    startY,
    deltaX,
    deltaY,
    delta,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
  }
}
