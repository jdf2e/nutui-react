import React from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const Demo1 = () => {
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper height={150} autoPlay="2000" defaultValue={0} indicator>
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img
                src={item}
                onClick={() => console.log(index)}
                alt=""
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
export default Demo1
