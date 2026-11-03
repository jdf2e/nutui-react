import React from 'react'
import { ITouchEvent } from '@tarojs/components'
import { BaseCell } from './base'

export interface TaroCellProps extends Omit<BaseCell, 'onClick'> {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => void
}
