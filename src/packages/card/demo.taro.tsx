import React from 'react'
import { Card } from '@/packages/nutui.react.taro'

const CardDemo = () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
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
        <h2>基本用法</h2>
        <Card
          imgUrl={state.imgUrl}
          title={state.title}
          price={state.price}
          vipPrice={state.vipPrice}
          shopDesc={state.shopDesc}
          delivery={state.delivery}
          shopName={state.shopName}
        />
        <h2>自定义商品标签</h2>
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
        <h2>价格后自定义标签</h2>
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
        <h2>商家介绍自定义</h2>
        <Card
          imgUrl={state.imgUrl}
          title={state.title}
          price={state.price}
          vipPrice={state.vipPrice}
          shopDesc={state.shopDesc}
          delivery={state.delivery}
          shopName={state.shopName}
          shopTagTpl={<div>这里是自定义区域</div>}
        />
        <h2>自定义右下角内容</h2>
        <Card
          imgUrl={state.imgUrl}
          title={state.title}
          price={state.price}
          vipPrice={state.vipPrice}
          shopDesc={state.shopDesc}
          delivery={state.delivery}
          shopName={state.shopName}
          footerTpl={<div style={{ fontSize: '12px' }}>自定义</div>}
        />
      </div>
    </>
  )
}

export default CardDemo
