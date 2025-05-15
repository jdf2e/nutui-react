import React from 'react'
import { Image } from '@tarojs/components'
import { Swiper, pxTransform } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <Swiper
      width={pxTransform(300)}
      height={pxTransform(150)}
      defaultValue={0}
      indicator
    >
      {list.map((item) => (
        <Swiper.Item key={item}>
          <Image style={{ width: '100%', height: '100%' }} src={item} />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo3
