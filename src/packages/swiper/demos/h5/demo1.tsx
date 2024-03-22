import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const Demo1 = () => {
  const [defaultValue1, setdefaultValue1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        autoPlay="2000"
        defaultValue={defaultValue1}
        indicator
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} onClick={() => console.log(index)} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default Demo1
