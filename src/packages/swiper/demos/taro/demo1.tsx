import React from 'react'
import { Image } from '@tarojs/components'
import { Swiper } from '@nutui/nutui-react-taro'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const Demo1 = () => {
  return (
    <Swiper defaultValue={1} autoPlay indicator>
      {list.map((item, index) => (
        <Swiper.Item key={item}>
          <Image
            style={{ width: '100%', height: '100%' }}
            onClick={() => console.log(index)}
            src={item}
          />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo1
