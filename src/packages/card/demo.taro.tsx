import React from 'react'
import { Card } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'

interface T {
  basic: string
  customProduct: string
  customPro1: string
  customPro2: string
  customPro3: string
  title: string
  customShop: string
  customFooter: string
  customContent: string
  desc: string
  delivery: string
  shopName: string
}
const CardDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      customProduct: '自定义商品标签',
      customPro1: '活鲜',
      customPro2: '礼盒',
      customPro3: '国产',
      title:
        '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
      customShop: '自定义店铺介绍',
      customFooter: '自定义右下角内容',
      customContent: '自定义',
      desc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>',
    },
    'zh-TW': {
      basic: '基本用法',
      customProduct: '自定義商品標簽',
      customPro1: '活鮮',
      customPro2: '禮盒',
      customPro3: '國產',
      title:
        '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
      customShop: '自定義店鋪介紹',
      customFooter: '自定義右下角內容',
      customContent: '自定義',
      desc: '自營',
      delivery: '廠商配送',
      shopName: '陽澄湖大閘蟹自營店>',
    },
    'en-US': {
      basic: 'Basic Usage',
      customProduct: 'Custom prolist',
      customPro1: 'tag',
      customPro2: 'tag',
      customPro3: 'tag',
      title: 'title',
      customShop: 'Custom Content',
      customFooter: 'Customize bottom right content',
      customContent: 'custom',
      desc: 'desc',
      delivery: 'delivery',
      shopName: 'shopName>',
    },
  })
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: translated.title,
    price: '388',
    vipPrice: '378',
    shopDesc: translated.desc,
    delivery: translated.delivery,
    shopName: translated.shopName,
  }
  const tagStyles = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '5px',
    marginLeft: '2px',
    width: '29px',
    height: '14px',
  }
  const wordStyles = {
    padding: '0 5px',
    borderRadius: '1px',
    fontSize: '10px',
    height: '15px',
    lineHeight: '15px',
    color: '#999',
    backgroundColor: '#f2f2f7',
    marginRight: '5px',
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Card
          imgUrl={state.imgUrl}
          title={state.title}
          price={state.price}
          vipPrice={state.vipPrice}
          shopDesc={state.shopDesc}
          delivery={state.delivery}
          shopName={state.shopName}
        />
        <h2>{translated.customProduct}</h2>
        <Card
          imgUrl={state.imgUrl}
          title={state.title}
          price={state.price}
          vipPrice={state.vipPrice}
          shopDesc={state.shopDesc}
          delivery={state.delivery}
          shopName={state.shopName}
          prolistTpl={
            <div
              className="search_prolist_attr"
              style={{
                display: 'inline-flex',
                margin: '3px 0 1px',
                height: '15px',
              }}
            >
              {[
                translated.customPro1,
                translated.customPro2,
                translated.customPro3,
              ].map((item) => {
                return (
                  <span style={wordStyles} className="word" key={item}>
                    {item}
                  </span>
                )
              })}
            </div>
          }
        />
        <h2>{translated.customProduct}</h2>
        <Card
          imgUrl={state.imgUrl}
          title={state.title}
          price={state.price}
          vipPrice={state.vipPrice}
          shopDesc={state.shopDesc}
          delivery={state.delivery}
          shopName={state.shopName}
          originTpl={
            <img
              style={tagStyles}
              src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
              alt=""
            />
          }
        />
        <h2>{translated.customShop}</h2>
        <Card
          imgUrl={state.imgUrl}
          title={state.title}
          price={state.price}
          vipPrice={state.vipPrice}
          shopDesc={state.shopDesc}
          delivery={state.delivery}
          shopName={state.shopName}
          shopTagTpl={<div>{translated.customShop}</div>}
        />
        <h2>{translated.customFooter}</h2>
        <Card
          imgUrl={state.imgUrl}
          title={state.title}
          price={state.price}
          vipPrice={state.vipPrice}
          shopDesc={state.shopDesc}
          delivery={state.delivery}
          shopName={state.shopName}
          footerTpl={
            <div style={{ fontSize: '12px' }}>{translated.customContent}</div>
          }
        />
      </div>
    </>
  )
}

export default CardDemo
