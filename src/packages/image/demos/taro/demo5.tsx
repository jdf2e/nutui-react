import React from 'react'
import Taro, { pxTransform } from '@tarojs/taro'
import { Image } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo5 = () => {
  const HARMONY =
    Taro.getEnv() === Taro.ENV_TYPE.HARMONYHYBRID ||
    Taro.getEnv() === Taro.ENV_TYPE.HARMONY

  return (
    <>
      <Image
        src="http://m.360buyimg.com/babel/s181x181_jfs/t1/210178/19/10205/31538/619bbcd9E5071aed5/8e1b7eb632aeed49.png"
        width={HARMONY ? pxTransform(30) : 30}
        height={HARMONY ? pxTransform(30) : 30}
      />
      <View
        style={{
          width: HARMONY ? pxTransform(200) : 200,
          marginLeft: HARMONY ? pxTransform(10) : 10,
        }}
      >
        雪纺衫女2021年春季新款洋气轻熟上衣
      </View>
    </>
  )
}
export default Demo5
