import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { Align } from '../../base/atoms'

export type NoticeBarAlign = Extract<Align, 'left' | 'center'>
export interface BaseNoticeBar extends BaseProps {
  align: Extract<Align, 'left' | 'center'>
  direction: string
  list: any
  duration: number
  height: number
  content: string
  closeable: boolean
  wrap: boolean
  leftIcon: ReactNode
  rightIcon: ReactNode
  right: ReactNode
  delay: string | number
  scrollable: boolean | null
  speed: number
  close?: (event: any) => void
  click?: (event: any) => void
  onClose?: (event: any) => void
  onClick?: (event: any) => void
  onItemClick?: (event: any, value: any) => void
}
