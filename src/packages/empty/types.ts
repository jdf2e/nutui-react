import React from 'react'
import { ButtonFill, ButtonSize, ButtonType } from '@/packages/button'

export interface EmptyAction {
  text: React.ReactNode
  className?: string
  style?: React.CSSProperties
  type?: ButtonType
  size?: ButtonSize
  fill?: ButtonFill
  disabled?: boolean
  onClick?: () => void
}
