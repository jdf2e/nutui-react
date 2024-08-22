import React from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo8 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        loop
        direction="vertical"
        style={{ '--swiper-offset': '13%' }}
        slideSize={120}
        indicator
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img
                src={list[index]}
                alt={list[index]}
                style={{ width: '100%', height: '100%' }}
                draggable={false}
              />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default Demo8
