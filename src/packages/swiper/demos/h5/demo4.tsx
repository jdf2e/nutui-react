import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo4 = () => {
  const [defaultValue3, setdefaultValue3] = useState(0)
  const [current, setCurrent] = useState(1)

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const [height] = useState<any>(150)
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        loop
        height={height}
        defaultValue={defaultValue3}
        onChange={(e) => setCurrent(e + 1)}
        indicator={<div className="page"> {current}/4 </div>}
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
export default Demo4
