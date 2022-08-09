import { useState } from 'react'

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
  const [startX, SetStartX] = useState(0)
  const [startY, SetStartY] = useState(0)
  const [moveX, SetMoveX] = useState(0)
  const [moveY, SetMoveY] = useState(0)
  const [deltaX, SetDeltaX] = useState(0)
  const [deltaY, SetDeltaY] = useState(0)
  const [offsetX, SetOffsetX] = useState(0)
  const [offsetY, SetOffsetY] = useState(0)
  const [direction, SetDirection] = useState<Direction>('')

  const isVertical = () => direction === 'vertical'
  const isHorizontal = () => direction === 'horizontal'

  const reset = () => {
    SetDeltaX(0)
    SetDeltaY(0)
    SetOffsetX(0)
    SetOffsetY(0)
    SetDirection('')
  }

  const start = ((event: TouchEvent) => {
    reset()
    SetStartX(event.touches[0].clientX)
    SetStartY(event.touches[0].clientY)
  }) as EventListener

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0]
    const dX = touch.clientX - startX
    const dY = touch.clientY - startY
    SetDeltaX(dX)
    SetDeltaY(dY)
    SetMoveX(touch.clientX)
    SetMoveY(touch.clientY)
    SetOffsetX(Math.abs(dX))
    SetOffsetY(Math.abs(dY))
    if (!direction) {
      SetDirection(getDirection(offsetX, offsetY))
    }
  }) as EventListener

  return {
    move,
    start,
    reset,
    startX,
    startY,
    moveX,
    moveY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
  }
}
