import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import { pxTransform } from '@tarojs/taro'

const Demo5 = () => {
  return (
    <>
      <Image
        src="http://m.360buyimg.com/babel/s181x181_jfs/t1/210178/19/10205/31538/619bbcd9E5071aed5/8e1b7eb632aeed49.png"
        width={pxTransform(30)}
        height={pxTransform(30)}
        style={{ marginRight: pxTransform(10) }}
      />
      <div style={{ width: pxTransform(220) }}>
        雪纺衫女2021年春季新款洋气轻熟上衣
      </div>
    </>
  )
}
export default Demo5
