import { CSSProperties, ReactNode } from 'react'

export interface BaseProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  id?: string
}
