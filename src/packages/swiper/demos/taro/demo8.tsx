import React from 'react'
import { Swiper } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box vertical-center">
      <Swiper
        defaultValue={0}
        direction="vertical"
        height={220}
        previousMargin="20px"
        nextMargin="20px"
        indicator
      >
        {list.map((item) => (
          <Swiper.Item key={item}>
            <img width="100%" height="100%" src={item} alt="" />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  )
}
export default Demo8
