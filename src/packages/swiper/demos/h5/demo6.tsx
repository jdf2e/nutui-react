import React from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo6 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box vertical-center">
      <Swiper
        loop
        defaultValue={0}
        direction="vertical"
        autoPlay="3000"
        indicator
        style={{ height: '150px' }}
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img
                src={item}
                alt=""
                draggable={false}
                style={{ width: '100%', height: '100%' }}
              />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default Demo6
