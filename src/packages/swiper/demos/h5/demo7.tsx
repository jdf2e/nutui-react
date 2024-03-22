import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo7 = () => {
  const [defaultValue8, setdefaultValue8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const [height] = useState<any>(150)
  return (
    <div className="demo-box " style={{ height: 150 }}>
      <Swiper
        defaultValue={defaultValue8}
        autoPlay="0"
        height={height}
        indicator
        width="280"
        center
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
export default Demo7
