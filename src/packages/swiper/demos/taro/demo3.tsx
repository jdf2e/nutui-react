import React from 'react'
import { Swiper } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <Swiper
      width={300}
      height={150}
      defaultValue={0}
      indicator
      style={{ margin: '0 auto' }}
    >
      {list.map((item) => (
        <Swiper.Item key={item}>
          <img width="100%" height="100%" src={item} alt="" />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo3
