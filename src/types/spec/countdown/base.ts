import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type CountDownType = 'default' | 'primary' | 'text'

export interface CountDownTime {
  d: number
  h: number
  m: number
  s: number
  ms: number
  /** 百毫秒（1 位，0–9），可由 ms 推导：Math.floor(ms / 100) % 10 */
  i?: number
}

export interface BaseCountDown extends BaseProps {
  type: CountDownType
  paused: boolean
  startTime: number
  endTime: number
  remainingTime: number
  format: string
  /**
   * 刷新步长（毫秒）。传入后按 `Math.floor(remainTime / refreshInterval)` 节流 setState；
   * 不传则按 format 最细单位用内置逻辑取整。
   */
  refreshInterval?: number
  autoStart: boolean
  time: number
  destroy: boolean
  onEnd: () => void
  onPaused: (restTime: number) => void
  onRestart: (restTime: number) => void
  onUpdate: (restTime: string | CountDownTime) => void
  children: ReactNode
}
