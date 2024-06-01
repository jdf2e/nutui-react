import React from 'react'
import Taro, { pxTransform } from '@tarojs/taro'
import { Image } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  const HARMONY =
    Taro.getEnv() === Taro.ENV_TYPE.HARMONYHYBRID ||
    Taro.getEnv() === Taro.ENV_TYPE.HARMONY

  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        <View style={{ width: HARMONY ? pxTransform(98) : 98 }}>
          <Image
            src={src}
            mode="aspectFit"
            width={HARMONY ? pxTransform(80) : 80}
            height={HARMONY ? pxTransform(80) : 80}
            radius={HARMONY ? pxTransform(40) : 40}
          />
        </View>
        <View style={{ width: HARMONY ? pxTransform(98) : 98 }}>
          <Image
            src={src}
            mode="scaleToFill"
            width={HARMONY ? pxTransform(80) : 80}
            height={HARMONY ? pxTransform(80) : 80}
            radius={HARMONY ? pxTransform(40) : 40}
          />
        </View>
        <View style={{ width: HARMONY ? pxTransform(98) : 98 }}>
          <Image
            src={src}
            mode="scaleToFill"
            width={HARMONY ? pxTransform(80) : 80}
            height={HARMONY ? pxTransform(80) : 80}
            radius={HARMONY ? pxTransform(10) : 10}
          />
        </View>
      </View>
    </>
  )
}
export default Demo2
