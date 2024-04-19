import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import { pxTransform } from '@tarojs/taro'

const Demo1 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <Image src={src} height={pxTransform(200)} />
    </>
  )
}
export default Demo1
