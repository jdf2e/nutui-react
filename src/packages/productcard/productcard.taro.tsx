import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import Price from '@/packages/price/index.taro'
import Tag from '@/packages/tag/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface ProductCardProps extends BasicComponent {
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
} as ProductCardProps
export const ProductCard: FunctionComponent<
  Partial<ProductCardProps> & React.HTMLAttributes<HTMLDivElement>
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
  const classPrefix = 'nut-productcard'
  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      <div className={`${classPrefix}__left`}>
        <img src={src} alt="" />
      </div>
      <div className={`${classPrefix}__right`}>
        <div className={`${classPrefix}__right-title`}>{title}</div>
        {description}
        <div className={`${classPrefix}right-price`}>
          <Price size="normal" price={price} />
          {priceTag || (
            <Price
              size="normal"
              className={`${classPrefix}right-price-origin`}
              price={vipPrice}
            />
          )}
        </div>
        <div className={`${classPrefix}right-other`}>
          {tag || (
            <>
              <Tag type="danger">{shopDescription}</Tag>
              <Tag plain>{delivery}</Tag>
            </>
          )}
        </div>
        <div className={`${classPrefix}right-shop`}>
          <div className={`${classPrefix}right-shop-name`}>{shopName}</div>
          {extra}
        </div>
      </div>
    </div>
  )
}

ProductCard.defaultProps = defaultProps
ProductCard.displayName = 'NutCard'
