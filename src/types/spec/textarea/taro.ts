import { TextareaProps } from '@tarojs/components'
import { BaseTextArea } from './base'

export type TaroTextAreaProps = Omit<BaseTextArea, 'style'> &
  Omit<TextareaProps, 'showCount' | 'onFocus' | 'onBlur'>
