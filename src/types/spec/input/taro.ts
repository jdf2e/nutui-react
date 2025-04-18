import { InputProps, ITouchEvent } from '@tarojs/components'
import { HTMLInputTypeAttribute } from 'react'
import { BaseInput } from './base'

export type TaroInputType = keyof InputProps.Type | HTMLInputTypeAttribute
export type TaroInputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done'
type OmittedInput = Omit<
  InputProps,
  'type' | 'ref' | 'onBlur' | 'onFocus' | 'maxlength' | 'password'
>

type TaroInput = Omit<
  BaseInput<TaroInputType, TaroInputConfirmType>,
  'onClick' | 'onFocus'
> &
  OmittedInput

export interface TaroInputProps extends TaroInput {
  onClick?: (e: ITouchEvent) => void
  onFocus?: (value: string, height?: number) => void
}
