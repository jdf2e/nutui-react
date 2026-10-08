import type { MouseEvent } from 'react'
import { BaseBackTop } from './base'

export interface WebBackTopProps extends Omit<BaseBackTop, 'onClick'> {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}
