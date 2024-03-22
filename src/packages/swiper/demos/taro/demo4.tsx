import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro'

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
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '46px',
            height: '22px',
            background: 'rgba(0, 0, 0, 0.33)',
            borderRadius: '22px',
            textAlign: 'center',
            color: '#fff',
            fontSize: '14px',
            zIndex: '1',
          }}
        >
          {current + 1}/{list.length}
        </div>
      }
    >
      {list.map((item) => (
        <Swiper.Item key={item}>
          <img width="100%" height="100%" src={item} alt="" />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo4
