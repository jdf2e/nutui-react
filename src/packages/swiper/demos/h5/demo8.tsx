import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo8 = () => {
  const [defaultValue9, setdefaultValue9] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box vertical-center">
      <Swiper
        defaultValue={defaultValue9}
        direction="vertical"
        autoPlay="0"
        height="220"
        indicator
        center
        style={{ height: '280px' }}
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default Demo8
