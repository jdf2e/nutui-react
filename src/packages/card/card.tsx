import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import Price from '@/packages/price'
import Tag from '@/packages/tag'
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
      <div className={`${classPrefix}-left`}>
        <img src={src} alt="" />
      </div>
      <div className={`${classPrefix}-right`}>
        <div className={`${classPrefix}-right-title`}>{title}</div>
        {description}
        <div className={`${classPrefix}-right-price`}>
          {price && <Price size="normal" price={price} />}
          {priceTag ||
            (vipPrice && (
              <Price
                size="normal"
                className={`${classPrefix}-right-price-origin`}
                price={vipPrice}
              />
            ))}
        </div>
        <div className={`${classPrefix}-right-other`}>
          {tag || (
            <>
              {shopDescription && <Tag type="danger">{shopDescription}</Tag>}
              {delivery && <Tag plain>{delivery}</Tag>}
            </>
          )}
        </div>
        <div className={`${classPrefix}-right-shop`}>
          {shopName && (
            <div className={`${classPrefix}-right-shop-name`}>{shopName}</div>
          )}
          {extra}
        </div>
      </div>
    </div>
  )
}

Card.displayName = 'NutCard'
