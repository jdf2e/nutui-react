import React from 'react'
import { useTranslate } from '../../sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const CardDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customProduct: '自定义商品标签',
      customShop: '自定义店铺介绍',
      customPriceIcon: '价格后自定义标签',
      customFooter: '自定义右下角内容',
      customerWithoutPrice: '不显示价格和店铺',
    },
    'zh-TW': {
      basic: '基础用法',
      customProduct: '自定義商品標簽',
      customShop: '自定義店鋪介紹',
      customPriceIcon: '價格後自定義標簽',
      customFooter: '自定義右下角內容',
      customerWithoutPrice: '不顯示價格和店鋪',
    },
    'en-US': {
      basic: 'Basic Usage',
      customProduct: 'Custom prolist',
      customShop: 'Custom Content',
      customPriceIcon: 'Price after custom tag',
      customFooter: 'Customize bottom right content',
      customerWithoutPrice: 'Hide price and shop',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.customProduct}</h2>
        <Demo2 />
        <h2>{translated.customPriceIcon}</h2>
        <Demo3 />
        <h2>{translated.customShop}</h2>
        <Demo4 />
        <h2>{translated.customFooter}</h2>
        <Demo5 />
        <h2>{translated.customerWithoutPrice}</h2>
        <Demo6 />
      </div>
    </>
  )
}

export default CardDemo
