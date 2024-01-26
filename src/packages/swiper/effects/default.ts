import { useDrag } from '@use-gesture/react'
import { SwiperDirection } from '../types'

type EventCallback = (...args: any[]) => void

class EventEmitter {
  private events: { [eventName: string]: EventCallback[] } = {}

  // 订阅事件
  on(eventName: string, callback: EventCallback): void {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  // 发布事件
  emit(eventName: string, ...args: any[]): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(...args))
    }
  }

  // 取消订阅
  off(eventName: string, callback: EventCallback): void {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb !== callback
      )
    }
  }
}

const bound = (v: number, min: number, max: number) => {
  if (min !== undefined) {
    v = Math.max(v, min)
  }
  if (max !== undefined) {
    v = Math.min(v, max)
  }
  return v
}

export const eventEmitter = new EventEmitter()

export const useDefaultTransform = (
  direction: SwiperDirection,
  slideSize: number,
  config: any
) => {
  const bind = useDrag((state) => {
    console.log(state)
    const isVertical = direction === 'vertical'
    const axis = Number(isVertical)
    const offset = state.offset[axis]

    if (state.last) {
      const swipeDirection = state.direction[axis]
      const velocity = state.velocity[axis]
      const minIndex = Math.floor(offset / slideSize)
      const maxIndex = minIndex + 1
      const index = Math.round(
        (offset + velocity * 2000 * swipeDirection) / slideSize
      )
      eventEmitter.emit('swipe', bound(index, minIndex, maxIndex))
    } else {
      eventEmitter.emit('dragging', -(offset / slideSize) * 100)
    }
  }, {})
  return bind
}
