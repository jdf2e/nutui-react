import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo3 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const [height] = useState<any>(150)
  const [defaultValue2, setdefaultValue2] = useState(0)
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper defaultValue={defaultValue2} width="300" height={height}>
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
export default Demo3
