import type { CSSProperties, ReactNode } from 'react'

export interface BasicComponent {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export const ComponentDefaults = {
  className: '',
  style: {},
}
