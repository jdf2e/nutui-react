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
  const last = useRef(false)
  const velocity = useRef(0)
  const touchTime = useRef<number>(Date.now())

  const isVertical = () => direction.current === 'vertical'
  const isHorizontal = () => direction.current === 'horizontal'

  const reset = () => {
    touchTime.current = Date.now()
    deltaX.current = 0
    deltaY.current = 0
    offsetX.current = 0
    offsetY.current = 0
    delta.current = 0
    direction.current = ''
    last.current = false
  }

  const getTouch = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches ? event.touches[0] : event.nativeEvent
    return touch as React.Touch
  }

  const getX = (touch: React.Touch) => {
    if (
      typeof touch.clientX !== 'undefined' &&
      typeof touch.pageX !== 'undefined'
    )
      return touch.pageX
    return touch.screenX ?? touch.pageX ?? touch.clientX ?? 0
  }

  const getY = (touch: React.Touch) => {
    if (
      typeof touch.clientY !== 'undefined' &&
      typeof touch.pageY !== 'undefined'
    )
      return touch.pageY
    return touch.screenY ?? touch.pageY ?? touch.clientY ?? 0
  }

  const start = (event: React.TouchEvent<HTMLElement>) => {
    reset()
    touchTime.current = Date.now()
    startX.current = getX(getTouch(event))
    startY.current = getY(getTouch(event))
  }

  const move = (event: React.TouchEvent<HTMLElement>) => {
    const touch = getTouch(event)
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
  const end = (event: React.TouchEvent<HTMLElement>) => {
    last.current = true
    velocity.current =
      Math.sqrt(deltaX.current ** 2 + deltaY.current ** 2) /
      (Date.now() - touchTime.current)
  }

  return {
    end,
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
    last,
  }
}
