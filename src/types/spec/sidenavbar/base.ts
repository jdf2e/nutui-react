import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { SimpleValue } from '../../base/atoms'

export type SideNavBarItemClick = ({
  title,
  value,
}: {
  title: string
  value: SimpleValue
}) => void

export interface BaseSideNavBar extends BaseProps {
  title: ReactNode
  visible: boolean
  width: string
  indent: number
  position: 'left' | 'right'
  onClose: () => void
}

export type BaseSideNavBarItem = {
  title: string
  value: SimpleValue
  onClick: SideNavBarItemClick
}

export type BaseSubSideNavBar = {
  title: string
  value: SimpleValue
  open?: boolean
  children?: ReactNode
  onClick?: ({
    title,
    value,
    isShow,
  }: {
    title: string
    value: SimpleValue
    isShow: boolean
  }) => void
}
