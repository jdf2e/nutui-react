import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [initPage8, setInitPage8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <Swiper defaultValue={0} loop previousMargin="20px" nextMargin="20px">
      {list.map((item) => (
        <Swiper.Item key={item}>
          <img width="100%" height="100%" src={item} alt="" />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo7
