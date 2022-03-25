import React, { FunctionComponent, CSSProperties } from 'react'
import './card.scss'
import Price from '@/packages/price'
import Tag from '@/packages/tag'

import bem from '@/utils/bem'

export interface CardProps {
  imgUrl: string
  title: string
  price: string
  vipPrice: string
  shopDesc: string
  delivery: string
  shopName: string
  className: string
  style: React.CSSProperties
  prolistTpl: React.ReactChild
  shopTagTpl: React.ReactChild
  originTpl: React.ReactChild
  footerTpl: React.ReactChild
}
const defaultProps = {} as CardProps
export const Card: FunctionComponent<Partial<CardProps> & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
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
  const b = bem('card')
  return (
    <div className={`${b()} ${className}`} style={style} {...rest}>
      <div className={b('left')}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={b('right')}>
        <div className={b('right__title')}>{title}</div>
        {prolistTpl}
        <div className={b('right__price')}>
          <Price price={price}></Price>
          {originTpl || <Price className={b('right__price__origin')} price={vipPrice}></Price>}
        </div>
        <div className={b('right__other')}>
          {shopTagTpl || (
            <>
              <Tag type="danger">{shopDesc}</Tag>
              <Tag plain>{delivery}</Tag>
            </>
          )}
        </div>
        <div className={b('right__shop')}>
          <div className={b('right__shop__name')}>{shopName}</div>
          {footerTpl}
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = defaultProps
Card.displayName = 'NutCard'
