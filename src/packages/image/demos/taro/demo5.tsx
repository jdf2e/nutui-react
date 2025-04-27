import React from 'react'
import { Cell, Image, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo5 = () => {
  return (
    <Cell>
      <Image
        src="http://m.360buyimg.com/babel/s181x181_jfs/t1/210178/19/10205/31538/619bbcd9E5071aed5/8e1b7eb632aeed49.png"
        width={30}
        height={30}
      />
      <View
        style={{
          width: pxTransform(200),
          marginLeft: pxTransform(10),
        }}
      >
        雪纺衫女2021年春季新款洋气轻熟上衣
      </View>
    </Cell>
  )
}
export default Demo5
