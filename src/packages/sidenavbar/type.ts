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
  key: string | number
  click?: ({ title, key }: { title: string; key: string | number }) => void
  children?: React.ReactNode
}
export type SubNavBarProps = {
  title: string
  key: string | number
  open?: boolean
  children?: React.ReactNode
  titleClick?: ({
    title,
    key,
    isShow,
  }: {
    title: string
    key: string | number
    isShow: boolean
  }) => void
}
