import React, { useState } from 'react'
import { Swiper, pxTransform } from '@nutui/nutui-react-taro'
import { Image, View, Text } from '@tarojs/components'

const Demo4 = () => {
  const [current, setCurrent] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <Swiper
      defaultValue={0}
      onChange={(e) => {
        setCurrent(e.detail.current)
      }}
      indicator={
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '85%',
            top: pxTransform(120),
            width: pxTransform(46),
            height: pxTransform(22),
            backgroundColor: 'rgba(0, 0, 0, 0.33)',
            borderRadius: pxTransform(22),
            textAlign: 'center',
            fontSize: pxTransform(14),
            zIndex: 1,
          }}
        >
          <Text style={{ color: '#fff' }}>
            {current + 1}/{list.length}
          </Text>
        </View>
      }
    >
      {list.map((item) => (
        <Swiper.Item key={item}>
          <Image style={{ width: '100%', height: '100%' }} src={item} />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo4
