import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo2 = () => {
  const [defaultValue1, setdefaultValue1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setList([
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
      ])
    }, 3000)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      {list.length ? (
        <Swiper
          height={height}
          autoPlay="2000"
          defaultValue={defaultValue1}
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
      ) : null}
    </div>
  )
}
export default Demo2
