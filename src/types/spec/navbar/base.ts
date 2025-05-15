import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { SimpleValue } from '../../base/atoms'

export interface BaseNavBar extends BaseProps {
  left: ReactNode
  back: ReactNode
  right: ReactNode
  title: ReactNode
  fixed: boolean
  safeAreaInsetTop: boolean
  placeholder: boolean
  zIndex: SimpleValue
  onBackClick: (e: any) => void
  children?: ReactNode
}
