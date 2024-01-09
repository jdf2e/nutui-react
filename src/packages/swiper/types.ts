import { ReactNode } from 'react'

export type SwiperRef = {
  to: (index: number) => void
  next: () => void
  pre: () => void
}

export type SwiperIndicator = (
  current: number,
  total: number,
  direction: SwiperDirections
) => ReactNode

export type SwiperDirections = 'horizontal' | 'vertical'
