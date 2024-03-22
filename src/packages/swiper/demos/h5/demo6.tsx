import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo6 = () => {
  const [defaultValue4, setdefaultValue4] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const [height] = useState<any>(150)
  return (
    <div className="demo-box vertical-center">
      <Swiper
        loop
        defaultValue={defaultValue4}
        direction="vertical"
        autoPlay="3000"
        height={height}
        indicator
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
export default Demo6
