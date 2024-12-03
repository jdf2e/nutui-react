import React, { FunctionComponent } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import Price from '@/packages/price/index.taro'
import Tag from '@/packages/tag/index.taro'
import Image from '@/packages/image/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CardProps extends BasicComponent {
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
const defaultProps = {
  ...ComponentDefaults,
  src: '',
  title: '',
  price: '',
  vipPrice: '',
  shopDescription: '',
  delivery: '',
  shopName: '',
  description: '',
  tag: '',
  priceTag: '',
  extra: '',
} as CardProps
export const Card: FunctionComponent<
  Partial<CardProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    src,
    title,
    price,
    vipPrice,
    shopDescription,
    delivery,
    shopName,
    tag,
    priceTag,
    description,
    extra,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-card'
  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      <View className={`${classPrefix}-left`}>
        <Image src={src} />
      </View>
      <View className={`${classPrefix}-right`}>
        <View className={`${classPrefix}-right-title`}>{title}</View>
        {description}
        <View className={`${classPrefix}-right-price`}>
          {price && <Price size="normal" price={price} />}
          {priceTag ||
            (vipPrice && (
              <Price
                size="normal"
                className={`${classPrefix}-right-price-origin`}
                price={vipPrice}
              />
            ))}
        </View>
        <View className={`${classPrefix}-right-other`}>
          {tag || (
            <>
              {shopDescription && <Tag type="danger">{shopDescription}</Tag>}
              {delivery && <Tag plain>{delivery}</Tag>}
            </>
          )}
        </View>
        <View className={`${classPrefix}-right-shop`}>
          {shopName && (
            <View className={`${classPrefix}-right-shop-name`}>{shopName}</View>
          )}
          {extra}
        </View>
      </View>
    </div>
  )
}

Card.displayName = 'NutCard'
