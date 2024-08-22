import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const CardDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customProduct: '自定义商品标签',
      customShop: '自定义店铺介绍',
      customFooter: '自定义右下角内容',
      customerWithoutPrice: '不显示价格和店铺',
    },
    'zh-TW': {
      basic: '基础用法',
      customProduct: '自定義商品標簽',
      customShop: '自定義店鋪介紹',
      customFooter: '自定義右下角內容',
      customerWithoutPrice: '不顯示價格和店鋪',
    },
    'en-US': {
      basic: 'Basic Usage',
      customProduct: 'Custom prolist',
      customShop: 'Custom Content',
      customFooter: 'Customize bottom right content',
      customerWithoutPrice: 'Hide price and shop',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.customProduct}</h2>
        <Demo2 />
        <h2>{translated.customProduct}</h2>
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
