import React, { FunctionComponent } from 'react'
import { TaroSwiperItemProps } from '@/types'

export const SwiperItem: FunctionComponent<Partial<TaroSwiperItemProps>> = (
  props
) => {
  const { children, ...rest } = props
  return <>{children}</>
}
SwiperItem.displayName = 'NutSwiperItem'
