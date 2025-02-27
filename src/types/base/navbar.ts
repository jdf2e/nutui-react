import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { SimpleValue } from './baseatom'

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
