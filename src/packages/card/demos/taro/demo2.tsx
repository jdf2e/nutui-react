import React from 'react'
import { Card } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const state = {
    src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDescription: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
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
    <Card
      src={state.src}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDescription={state.shopDescription}
      delivery={state.delivery}
      shopName={state.shopName}
      description={
        <div
          className="search_prolist_attr"
          style={{
            display: 'inline-flex',
            margin: '3px 0 1px',
            height: '15px',
          }}
        >
          {['鲜活', '礼盒', '国产'].map((item) => {
            return (
              <span style={wordStyles} className="word" key={item}>
                {item}
              </span>
            )
          })}
        </div>
      }
    />
  )
}
export default Demo2
