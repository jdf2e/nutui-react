import React from 'react'
import Taro, { pxTransform } from '@tarojs/taro'
import { Image } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const HARMONY =
    Taro.getEnv() === Taro.ENV_TYPE.HARMONYHYBRID ||
    Taro.getEnv() === Taro.ENV_TYPE.HARMONY

  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <Image src={src} height={HARMONY ? pxTransform(200) : 200} />
    </>
  )
}
export default Demo1
