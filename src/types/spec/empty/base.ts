import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { SimpleValue, UIFill, UISize, UIType } from '../../base/atoms'

export interface EmptyAction {
  text: ReactNode
  type?: UIType
  size?: UISize
  fill?: UIFill
  disabled?: boolean
  onClick?: () => void
}

export type EmptyStatus =
  | 'network'
  | 'comment'
  | 'search'
  | 'shop'
  | 'address'
  | 'order'
  | 'favor'
  | 'cart'

export type EmptySize = 'full' | 'half' | 'partial'

/** 内置缺省插图 URL；图片本体走 CDN 运行时加载，打进包内的仅为 URL 字符串 */
export const EMPTY_STATUS_IMAGES: Record<EmptyStatus, string> = {
  network:
    'https://img10.360buyimg.com/imagetools/jfs/t1/449411/36/15729/19102/6a30e810F36720c83/03e61e01e08ab731.png',
  comment:
    'https://img12.360buyimg.com/imagetools/jfs/t1/458866/29/4221/20560/6a30e810F02e0c676/03e61e01e02c0dab.png',
  search:
    'https://img12.360buyimg.com/imagetools/jfs/t1/453287/39/13487/21638/6a30e810Fc7b15ec6/03e61e01e0bf5f81.png',
  shop: 'https://img11.360buyimg.com/imagetools/jfs/t1/447986/21/19304/24327/6a30e810F0a9c3aca/03e61e01dd8d09b1.png',
  address:
    'https://img12.360buyimg.com/imagetools/jfs/t1/446923/19/19328/23073/6a30e810F37ec221d/03e61e01e0e69357.png',
  order:
    'https://img11.360buyimg.com/imagetools/jfs/t1/455990/2/7107/24405/6a30e810Fcb5a39b1/03e61e01e0715a43.png',
  favor:
    'https://img12.360buyimg.com/imagetools/jfs/t1/458517/13/4983/22338/6a30e810F9d69ff57/03e61e01e092c3f9.png',
  cart: 'https://img11.360buyimg.com/imagetools/jfs/t1/453149/9/10304/23216/6a30e810Ff6c0d230/03e61e01e0b41203.png',
}

export const getEmptyStatusImage = (status: EmptyStatus) => {
  return EMPTY_STATUS_IMAGES[status] || EMPTY_STATUS_IMAGES.network
}

export interface BaseEmpty extends BaseProps {
  image: ReactNode
  imageSize: SimpleValue
  title: ReactNode
  description: ReactNode
  size: EmptySize
  status: EmptyStatus
  actions: Array<EmptyAction>
}
