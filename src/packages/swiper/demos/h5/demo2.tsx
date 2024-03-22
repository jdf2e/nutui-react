import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo2 = () => {
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
        <Swiper height={150} autoPlay="2000" defaultValue={0} indicator>
          {list.map((item) => {
            return (
              <Swiper.Item key={item}>
                <img
                  src={item}
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                  draggable={false}
                />
              </Swiper.Item>
            )
          })}
        </Swiper>
      ) : null}
    </div>
  )
}
export default Demo2
