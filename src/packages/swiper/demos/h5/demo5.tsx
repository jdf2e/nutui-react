import React, { CSSProperties, useState } from 'react'
import { Swiper } from '@nutui/nutui-react'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react'

const Demo5 = () => {
  const swiperRef = React.useRef<any>(null)
  const [current2, setCurrent2] = useState(1)

  const handlePrev = () => {
    swiperRef.current.prev()
  }
  const handleNext = () => {
    swiperRef.current.next()
  }
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
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box" style={{ height: 150, position: 'relative' }}>
      <Swiper
        ref={swiperRef}
        defaultValue={0}
        onChange={(e) => setCurrent2(e + 1)}
        loop
        indicator={<div style={pageStyle}> {current2}/4 </div>}
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
      <div style={btnsStyle as any}>
        <span style={spanStyle} onClick={(e) => handlePrev()}>
          <ArrowLeft />
        </span>
        <span style={spanStyle} onClick={(e) => handleNext()}>
          <ArrowRight />
        </span>
      </div>
    </div>
  )
}
export default Demo5
