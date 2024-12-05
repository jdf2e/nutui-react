import React from 'react'
import { Card, Tag } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo2 = () => {
  const state = {
    src: 'https://img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDescription: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const wordStyles = {
    marginRight: pxTransform(5),
  }
  return (
    <Card
      src={state.src}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDescription={state.shopDescription}
      delivery={state.delivery}
      shopName={state.shopName}
      description={
        <View
          style={{
            display: 'flex',
            margin: `${pxTransform(3)} 0 ${pxTransform(1)}`,
          }}
        >
          {['鲜活', '礼盒', '国产'].map((item) => {
            return (
              <Tag
                background="#f2f2f7"
                color="#999999"
                key={item}
                style={wordStyles}
              >
                {item}
              </Tag>
            )
          })}
        </View>
      }
    />
  )
}
export default Demo2
