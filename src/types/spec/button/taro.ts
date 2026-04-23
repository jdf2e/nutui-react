import { ButtonProps as MiniProgramButtonProps } from '@tarojs/components'
import { BaseButton } from './base'

type OmitMiniProgramButtonProps = Omit<
  MiniProgramButtonProps,
  'size' | 'type' | 'onClick' | 'style' | 'disabled' | 'loading' | 'id'
>

export interface TaroButtonProps
  extends BaseButton,
    OmitMiniProgramButtonProps {
  nativeType: 'submit' | 'reset' // | 'button'
}
