import React, { useEffect, useRef } from 'react'
import { useTouch } from '@/utils/use-touch'

export interface SwiperProps {
  direction: any
  indicator: any
  loop: boolean
  duration: number
  autoplay: boolean
  defaultValue: number
  touchable: boolean
  onChange: any
}

function useDrag(
  handler: (state: any) => void,
  config: {
    preventDefault: boolean
    bounds: () => { top: number; bottom: number; left: number; right: number }
  }
) {
  const dragRef = useRef<HTMLElement>(null)
  const touch = useTouch()
  const handleTouchStart = (e: any) => {
    touch.start(e)
    handler(touch)
  }
  const handleTouchMove = (e: any) => {
    if (config.preventDefault) {
      e.preventDefault()
    }
    touch.move(e)
    if (config.bounds) {
      const position = config.bounds()
      if (touch.deltaY < position.bottom || touch.deltaY > position.top) return
      if (touch.deltaX < position.right || touch.deltaY > position.left) return
    }
    handler(touch)
  }
  const handleTouchEnd = (e: any) => {
    touch.end(e)
    handler(touch)
  }
  useEffect(() => {
    const element = dragRef.current
    if (!element) return
    element.addEventListener('touchstart', handleTouchStart, { passive: true })
    element.addEventListener('touchmove', handleTouchMove, { passive: true })
    element.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [dragRef])
  return () => ({
    ref: dragRef,
  })
}

export const Swiper = (props: SwiperProps) => {
  const bind = useDrag((state: any) => {
    console.log(state)
  }, {})

  return (
    <div className="nut-swiper" {...bind()}>
      <div className="nut-swiper-inner">
        <div className="nut-swiper-item">
          <div style={{ background: 'red', width: '100%', height: '100%' }} />
        </div>
        <div className="nut-swiper-item">
          <div style={{ background: 'green', width: '100%', height: '100%' }} />
        </div>
        <div className="nut-swiper-item">
          <div
            style={{ background: 'yellow', width: '100%', height: '100%' }}
          />
        </div>
        <div className="nut-swiper-item">
          <div
            style={{ background: 'orange', width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}
