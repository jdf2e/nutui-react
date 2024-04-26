import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo2 = () => {
  const [asyncList, setAsyncList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setAsyncList([
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
      ])
    }, 3000)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      {setAsyncList.length ? (
        <Swiper indicator>
          {asyncList.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img
                  src={asyncList[index]}
                  alt={asyncList[index]}
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
