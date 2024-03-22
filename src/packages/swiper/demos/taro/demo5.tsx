import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react-taro'

const Demo5 = () => {
  const swiperRef = React.useRef<any>(null)
  const [current2, setCurrent2] = useState(0)

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const btnsStyle = {
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-15px)',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: '0px',
  }
  const spanStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
  return (
    <div className="demo-box" style={{ height: 150, position: 'relative' }}>
      <Swiper
        ref={swiperRef}
        defaultValue={0}
        onChange={(e) => {
          setCurrent2(e.detail.current)
        }}
        indicator={
          <div className="page">
            {current2 + 1}/{list.length}
          </div>
        }
      >
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
      <div style={btnsStyle as any}>
        <span style={spanStyle} onClick={(e) => swiperRef.current?.prev()}>
          <ArrowLeft />
        </span>
        <span style={spanStyle} onClick={(e) => swiperRef.current?.next()}>
          <ArrowRight />
        </span>
      </div>
    </div>
  )
}
export default Demo5
