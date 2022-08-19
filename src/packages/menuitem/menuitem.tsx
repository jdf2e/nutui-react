import React, { FunctionComponent } from 'react'
import './menuitem.scss'
import { useConfig } from '@/packages/configprovider'

export interface MenuItemProps {
  title: React.ReactNode
  options: any[]
  disabled: boolean
  columns: number
  optionsIcon: string
  direction: string
  activeClassName: string
  inactiveClassName: string
  fontClassName: string
  iconClassPrefix: string
  onChange: (event: any) => void
  children: React.ReactNode
}
const defaultProps = {} as MenuItemProps
export const MenuItem: FunctionComponent<Partial<MenuItemProps>> = (props) => {
  const { locale } = useConfig()
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-menuitem">MenuItem</div>
}

MenuItem.defaultProps = defaultProps
MenuItem.displayName = 'NutMenuItem'
