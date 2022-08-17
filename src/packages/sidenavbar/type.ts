import React from 'react'

type NavBarProps = {
  showhead?: boolean
}
export interface SideNavBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    NavBarProps {
  title: string
  visible: boolean
  width?: string
  offset?: number
  position?: 'left' | 'right'
  handleClose: () => void
  children?: React.ReactNode
}
export type SideNavBarItemProps = {
  title: string
  ikey: string | number
  click?: ({ title, ikey }: { title: string; ikey: string | number }) => void
  children?: React.ReactNode
}
export type SubNavBarProps = {
  title: string
  ikey: string | number
  open?: boolean
  children?: React.ReactNode
  titleClick?: ({
    title,
    ikey,
    isShow,
  }: {
    title: string
    ikey: string | number
    isShow: boolean
  }) => void
}
