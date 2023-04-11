import type { CSSProperties, ReactNode } from 'react'

export interface BasicComponent {
  className?: string
  style?: CSSProperties & Record<`--${string}`, string | number>
  children?: ReactNode
}

export const ComponentDefaults = {
  className: '',
  style: {},
}
