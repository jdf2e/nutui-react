import React, { FunctionComponent, MouseEventHandler } from 'react'

export type SideNavBarItemProps = {
  title: string
  ikey: string | number
  click?: ({ title, ikey }: { title: string; ikey: string | number }) => void
  children?: React.ReactNode
}
export const SideNavBarItem: FunctionComponent<SideNavBarItemProps> = (
  props
) => {
  const { title, ikey, children, click, ...rest } = props
  const clickFn: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    click && click({ title, ikey })
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
