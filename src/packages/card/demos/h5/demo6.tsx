import React from 'react'
import { Card } from '@nutui/nutui-react'

const Demo6 = () => {
  const state = {
    src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '【活蟹】湖塘煙雨 阳澄湖大闸蟹公 4.5 两 母 3.5 两 4 对 8 只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  }

  return (
    <Card
      src={state.src}
      title={state.title}
      description={
        <div style={{ fontSize: '14px', padding: '10px 0', color: '#999' }}>
          阳澄湖大闸蟹鲜活生鲜螃蟹现货水产礼盒海鲜水
        </div>
      }
    />
  )
}
export default Demo6
