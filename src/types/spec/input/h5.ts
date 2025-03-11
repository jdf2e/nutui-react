import { HTMLInputTypeAttribute } from 'react'
import { BaseInput } from './base'

export type WebInputType = HTMLInputTypeAttribute
export type WebInputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done'

export interface WebInputProps
  extends Omit<BaseInput<WebInputType, WebInputConfirmType>, 'onClick'> {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}
