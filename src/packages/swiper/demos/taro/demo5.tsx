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
  return (
    <div className="demo-box" style={{ height: 150 }}>
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
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
      <div className="nut-swiper-btns">
        <span
          className="nut-swiper-btns-left"
          onClick={(e) => swiperRef.current?.prev()}
        >
          <ArrowLeft />
        </span>
        <span
          className="nut-swiper-btns-left"
          onClick={(e) => swiperRef.current?.next()}
        >
          <ArrowRight />
        </span>
      </div>
    </div>
  )
}
export default Demo5
