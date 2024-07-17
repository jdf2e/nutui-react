import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  const src =
    'https://s1-relay.360buyimg.com/relay/c/iconfont/img/6/09262afb06bc7710c6be812ef10348ee.svg?_=1721119524104'
  return (
    <>
      <Image src={src} height={pxTransform(20)} />
    </>
  )
}
export default Demo1
