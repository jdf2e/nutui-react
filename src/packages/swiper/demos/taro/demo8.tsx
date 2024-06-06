import React from 'react'
import { Swiper } from '@nutui/nutui-react-taro'
import { Image, View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo8 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <View className="demo-box vertical-center">
      <Swiper
        defaultValue={0}
        direction="vertical"
        height={pxTransform(220)}
        previousMargin="20px"
        nextMargin="20px"
        indicator
      >
        {list.map((item) => (
          <Swiper.Item key={item}>
            <Image style={{ width: '100%', height: '100%' }} src={item} />
          </Swiper.Item>
        ))}
      </Swiper>
    </View>
  )
}
export default Demo8
