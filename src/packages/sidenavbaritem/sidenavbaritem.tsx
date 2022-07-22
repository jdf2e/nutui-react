import React, { FunctionComponent } from 'react'
import { SubNavBarProps } from '../sidenavbar/type'

export const SideNavBarItem: FunctionComponent<
  Partial<SubNavBarProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { title, children, ...rest } = props
  return <div className="nut-subsidenavbar__item border-bt">{title}</div>
}
