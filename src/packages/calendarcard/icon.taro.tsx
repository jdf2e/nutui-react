import React, { FC } from 'react'
import { Image } from '@tarojs/components'
import { pxTransform } from '@nutui/nutui-react-taro'
import leftSVG from './icons/singleLeft.svg'
import rightSVG from './icons/singleRight.svg'
import doubleLeftSVG from './icons/doubleLeft.svg'
import doubleRightSVG from './icons/doubleRight.svg'

let left = leftSVG as string
let right = rightSVG as string
let doubleLeft = doubleLeftSVG as string
let doubleRight = doubleRightSVG as string

interface IconProps {
  url: string
}

if (process.env.TARO_ENV === 'jdharmony_cpp') {
  left =
    'https://img11.360buyimg.com/imagetools/jfs/t1/187031/35/51586/196/6731c464F9b9f8f00/5506e32bf15e29dc.png'
  right =
    'https://img12.360buyimg.com/imagetools/jfs/t1/181006/25/51824/185/6731c452F9e252322/7493147dd6b4a88d.png'
  doubleLeft =
    'https://img13.360buyimg.com/imagetools/jfs/t1/221244/29/45876/259/6731c6bdF515df0a2/624e8eee3c8494a2.png'
  doubleRight =
    'https://img11.360buyimg.com/imagetools/jfs/t1/238382/25/24000/235/6731c6bdF0153286c/4a57e60b6e889af3.png'
}

const Icon: FC<IconProps> = ({ url }) => {
  const iconStyle = { width: pxTransform(18), height: pxTransform(18) }
  return <Image src={url} mode="aspectFit" style={iconStyle} />
}

export const ArrowLeft: FC = () => <Icon url={left} />

export const ArrowRight: FC = () => <Icon url={right} />

export const DoubleLeft: FC = () => <Icon url={doubleLeft} />

export const DoubleRight: FC = () => <Icon url={doubleRight} />
