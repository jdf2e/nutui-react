import type { CSSProperties, ReactNode } from 'react'

export interface IComponent {
  className?: string
  style?: CSSProperties
  iconFontClassName?: string
  iconClassPrefix?: string
  children?: ReactNode
}

export const ComponentDefaults = {
  // className: '',
  // style: {},
  // children: undefined,
  iconClassPrefix: 'nut-icon',
  iconFontClassName: 'nutui-iconfont',
}
