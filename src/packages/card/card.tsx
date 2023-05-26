import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import Price from '@/packages/price'
import Tag from '@/packages/tag'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CardProps extends BasicComponent {
  imgUrl: string
  title: string
  price: string
  vipPrice: string
  shopDesc: string
  delivery: string
  shopName: string
  prolistTpl: React.ReactNode
  shopTagTpl: React.ReactNode
  originTpl: React.ReactNode
  footerTpl: React.ReactNode
}
const defaultProps = {
  ...ComponentDefaults,
  imgUrl: '',
  title: '',
  price: '',
  vipPrice: '',
  shopDesc: '',
  delivery: '',
  shopName: '',
  prolistTpl: '',
  shopTagTpl: '',
  originTpl: '',
  footerTpl: '',
} as CardProps
export const Card: FunctionComponent<
  Partial<CardProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    imgUrl,
    title,
    price,
    vipPrice,
    shopDesc,
    delivery,
    shopName,
    shopTagTpl,
    originTpl,
    prolistTpl,
    footerTpl,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-card'
  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      <div className={`${classPrefix}__left`}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={`${classPrefix}__right`}>
        <div className={`${classPrefix}__right__title`}>{title}</div>
        {prolistTpl}
        <div className={`${classPrefix}__right__price`}>
          <Price size="normal" price={price} />
          {originTpl || (
            <Price
              size="normal"
              className={`${classPrefix}__right__price__origin`}
              price={vipPrice}
            />
          )}
        </div>
        <div className={`${classPrefix}__right__other`}>
          {shopTagTpl || (
            <>
              <Tag type="danger">{shopDesc}</Tag>
              <Tag plain>{delivery}</Tag>
            </>
          )}
        </div>
        <div className={`${classPrefix}__right__shop`}>
          <div className={`${classPrefix}__right__shop__name`}>{shopName}</div>
          {footerTpl}
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = defaultProps
Card.displayName = 'NutCard'
