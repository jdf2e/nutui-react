import React, { FC } from 'react'
import { Image } from '@tarojs/components'

interface IconProps {
  url: string
}

const left =
  'https://storage.360buyimg.com/imgtools/6437a2b149-bb511b40-4942-11f1-b1e1-7158b9aae0a9.svg'
const right =
  'https://storage.360buyimg.com/imgtools/8aa060341d-baf78990-4942-11f1-9368-cd56fc5fadc6.svg'
const doubleLeft =
  'https://storage.360buyimg.com/imgtools/b5e798f4ed-bbe8c760-4942-11f1-b1e1-7158b9aae0a9.svg'
const doubleRight =
  'https://storage.360buyimg.com/imgtools/d6979fa16d-bbb4bf10-4942-11f1-9368-cd56fc5fadc6.svg'

const Icon: FC<IconProps> = ({ url }) => {
  const iconStyle = {
    color: 'var(--nutui-color-text)',
  }
  return (
    <Image
      className="nut-calendarcard-icon"
      svg
      src={url}
      mode="aspectFit"
      style={iconStyle}
    />
  )
}

export const ArrowLeft: FC = () => <Icon url={left} />

export const ArrowRight: FC = () => <Icon url={right} />

export const DoubleLeft: FC = () => <Icon url={doubleLeft} />

export const DoubleRight: FC = () => <Icon url={doubleRight} />
