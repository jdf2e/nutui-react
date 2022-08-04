import React, { FunctionComponent, MouseEventHandler } from 'react'
import { SideNavBarItemProps } from '../sidenavbar/type'

export const SideNavBarItem: FunctionComponent<SideNavBarItemProps> = (props) => {
  const { title, ikey, children, click, ...rest } = props
  const clickFn: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    click && click({ title, ikey })
  }
  return (
    <div className="nut-subsidenavbar__item border-bt" onClick={clickFn}>
      {title}
    </div>
  )
}
