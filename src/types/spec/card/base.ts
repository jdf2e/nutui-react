import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface BaseCard extends BaseProps {
  src: string
  title: string
  price: string
  vipPrice: string
  shopDescription: string
  delivery: string
  shopName: string
  description: ReactNode
  tag: ReactNode
  priceTag: ReactNode
  extra: ReactNode
}
