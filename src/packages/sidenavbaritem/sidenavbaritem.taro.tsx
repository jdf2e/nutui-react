import React, { FunctionComponent, MouseEventHandler } from 'react'

export type SideNavBarItemProps = {
  title: string
  key: string | number
  onClick?: ({ title, key }: { title: string; key: string | number }) => void
  children?: React.ReactNode
}
export const SideNavBarItem: FunctionComponent<SideNavBarItemProps> = (
  props
) => {
  const { title, key, children, onClick, ...rest } = props
  const clickFn: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    onClick && onClick({ title, key })
  }
  return (
    <div
      className="nut-subsidenavbar__item border-bt"
      onClick={clickFn}
      {...rest}
    >
      {title}
    </div>
  )
}
