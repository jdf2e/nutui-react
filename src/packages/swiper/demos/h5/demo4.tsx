import React, { CSSProperties, useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo4 = () => {
  const [current, setCurrent] = useState(1)
  const onChange = (index: number) => {
    setCurrent(index + 1)
  }
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const pageStyle: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '46px',
    height: '22px',
    background: 'rgba(0, 0, 0, 0.33)',
    borderRadius: '22px',
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px',
  }
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        onChange={onChange}
        indicator={<div style={pageStyle}> {current}/4 </div>}
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img
                src={list[index]}
                alt={list[index]}
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
export default Demo4
