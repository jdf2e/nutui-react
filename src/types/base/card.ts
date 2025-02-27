import { BaseProps } from '@/types/base/baseprops'

export interface BaseCard extends BaseProps {
  src: string
  title: string
  price: string
  vipPrice: string
  shopDescription: string
  delivery: string
  shopName: string
  description: React.ReactNode
  tag: React.ReactNode
  priceTag: React.ReactNode
  extra: React.ReactNode
}
