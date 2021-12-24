import React, { useState } from 'react'
import Swiperitem from '@/packages/swiperitem'
import Swiper from '@/packages/swiper'
import '@/packages/swiper/demo.scss'

const SwiperDemo = () => {
  let swiperRef = React.useRef<any>(null)
  const [height, setHeight] = useState<any>(150)
  const [paginationColor, setPaginationColor] = useState<string>('#426543')
  const [initPage1, setInitPage1] = useState<any>(0)
  const [initPage2, setInitPage2] = useState<any>(0)
  const [initPage3, setInitPage3] = useState<any>(0)
  const [initPage4, setInitPage4] = useState<any>(0)
  const [current, setCurrent] = useState(1)

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const onChange = (e: number) => {
    // console.log(e)
  }
  const btn = (e: any) => {
    ;(swiperRef.current as any).next()
    // setInitPage((v:any)=>v-1);
  }
  return (
    <div className="demo padding">
      <h2>基本用法</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          ref={swiperRef}
          height={height}
          paginationColor={paginationColor}
          autoPlay="2000"
          initPage={initPage1}
          onChange={onChange}
          paginationVisible={true}
        >
          {list.map((item) => {
            return (
              <Swiperitem key={item}>
                <img src={item} alt="" />
              </Swiperitem>
            )
          })}
        </Swiper>
      </div>
      <h2>自定义大小</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper initPage={initPage2} width="300" loop={false}>
          {list.map((item) => {
            return (
              <Swiperitem key={item}>
                <img src={item} alt="" />
              </Swiperitem>
            )
          })}
        </Swiper>
      </div>
      <h2>自定义指示器</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          loop={true}
          initPage={initPage3}
          onChange={(e) => setCurrent(e + 1)}
          pageContent={<div className="page"> {current}/4 </div>}
        >
          {list.map((item) => {
            return (
              <Swiperitem key={item}>
                <img src={item} alt="" />
              </Swiperitem>
            )
          })}
        </Swiper>
      </div>
      <h2>垂直方向</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          loop={true}
          initPage={initPage4}
          direction="vertical"
          autoPlay="3000"
          height="150"
          paginationVisible={true}
        >
          {list.map((item) => {
            return (
              <Swiperitem key={item}>
                <img src={item} alt="" />
              </Swiperitem>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SwiperDemo
