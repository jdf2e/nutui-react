import React, { FunctionComponent, MouseEventHandler } from 'react'

export type SideNavBarItemProps = {
  title: string
  value: string | number
  onClick?: ({
    title,
    value,
  }: {
    title: string
    value: string | number
  }) => void
  children?: React.ReactNode
}
export const SideNavBarItem: FunctionComponent<SideNavBarItemProps> = (
  props
) => {
  const classPrefix = 'nut-subsidenavbar'
  const { title, value, children, onClick, ...rest } = props
  const clickFn: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    onClick && onClick({ title, value })
  }
  return (
    <div
      className={`${classPrefix}-item ${classPrefix}-border-bt`}
      onClick={clickFn}
      {...rest}
    >
      {title}
    </div>
  )
}
