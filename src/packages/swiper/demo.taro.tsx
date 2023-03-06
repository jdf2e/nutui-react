import React, { useState, useEffect } from 'react'
import '@/packages/swiper/demo.scss'
import { useTranslate } from '@/sites/assets/locale/taro'
import { SwiperItem, Swiper, Icon } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

interface T {
  basic: string
  asyc: string
  dynamicDel: string
  size: string
  indicator: string
  btns: string
  vertical: string
  horizontalCenter: string
  verticalCenter: string
}
const SwiperDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      asyc: '异步加载(3s)',
      dynamicDel: '动态加载',
      size: '自定义大小',
      indicator: '自定义指示器',
      btns: '手动切换',
      vertical: '垂直方向',
      horizontalCenter: '水平居中展示',
      verticalCenter: '垂直居中展示',
    },
    'en-US': {
      basic: 'Basic Usage',
      asyc: 'Asynchronous loading(3s)',
      dynamicDel: 'Dynamic loading',
      size: 'Custom size',
      indicator: 'Custom indicator',
      btns: 'Manual switching',
      vertical: 'Vertical direction',
      horizontalCenter: 'Horizontal center display',
      verticalCenter: 'Vertical center display',
    },
  })
  const swiperRef = React.useRef<any>(null)
  const [height, setHeight] = useState<any>(150)
  const [paginationColor, setPaginationColor] = useState<string>('#426543')
  const [paginationBgColor, setPaginationBgColor] = useState<string>('#426ddd')
  const [initPage1, setInitPage1] = useState<any>(0)
  const [initPage2, setInitPage2] = useState<any>(0)
  const [initPage3, setInitPage3] = useState<any>(0)
  const [initPage4, setInitPage4] = useState<any>(0)
  const [initPage5, setInitPage5] = useState<any>(0)
  const [initPage6, setInitPage6] = useState<any>(0)
  const [initPage7, setInitPage7] = useState<any>(0)
  const [initPage8, setInitPage8] = useState<any>(0)
  const [initPage9, setInitPage9] = useState<any>(0)
  const [current, setCurrent] = useState(1)
  const [current2, setCurrent2] = useState(1)
  const [list1, setList1] = useState<string[]>([])
  const [list2, setList2] = useState<string[]>([
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ])

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const onChange = (e: number) => {}
  const handlePrev = () => {
    swiperRef.current.prev()
  }
  const handleNext = () => {
    swiperRef.current.next()
  }

  useEffect(() => {
    setTimeout(() => {
      const arr: any = list.slice()
      setList1(arr)
      const arr2 = list2.slice()
      arr2.splice(1, 1)
      setList2(arr2)
    }, 3000)
  }, [])
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} padding`}>
        <h2>{translated.basic}</h2>
        <div className="demo-box" style={{ height: 150 }}>
          <Swiper
            height={height}
            paginationColor={paginationColor}
            paginationBgColor={paginationBgColor}
            autoPlay="2000"
            initPage={initPage1}
            onChange={onChange}
            paginationVisible
          >
            {list.map((item) => {
              return (
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
        </div>
        <h2>{translated.asyc}</h2>
        <div className="demo-box" style={{ height: 150 }}>
          <Swiper
            height={height}
            paginationColor={paginationColor}
            autoPlay="2000"
            initPage={initPage2}
            onChange={onChange}
            paginationVisible
          >
            {list1.map((item) => {
              return (
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
        </div>
        <h2>{translated.dynamicDel}</h2>
        <div className="demo-box" style={{ height: 150 }}>
          <Swiper
            height={height}
            paginationColor={paginationColor}
            autoPlay="2000"
            initPage={initPage3}
            onChange={onChange}
            paginationVisible
          >
            {list2.map((item) => {
              return (
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
        </div>

        <h2>{translated.size}</h2>
        <div className="demo-box" style={{ height: 150 }}>
          <Swiper initPage={initPage4} height={height} width="300" loop={false}>
            {list.map((item) => {
              return (
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
        </div>
        <h2>{translated.indicator}</h2>
        <div className="demo-box" style={{ height: 150 }}>
          <Swiper
            loop
            height={height}
            initPage={initPage5}
            onChange={(e) => setCurrent(e + 1)}
            pageContent={<div className="page"> {current}/4 </div>}
          >
            {list.map((item) => {
              return (
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
        </div>
        <h2>{translated.btns}</h2>
        <div className="demo-box" style={{ height: 150 }}>
          <Swiper
            height={height}
            ref={swiperRef}
            loop
            initPage={initPage6}
            onChange={(e) => setCurrent2(e + 1)}
            pageContent={<div className="page"> {current2}/4 </div>}
          >
            {list.map((item) => {
              return (
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
          <div className="nut-swiper-btns">
            <span
              className="nut-swiper-btns__left"
              onClick={(e) => handlePrev()}
            >
              <Icon name="left" />
            </span>
            <span
              className="nut-swiper-btns__left"
              onClick={(e) => handleNext()}
            >
              <Icon name="right" />
            </span>
          </div>
        </div>
        <h2>{translated.vertical}</h2>
        <div className="demo-box vertical-center" style={{ height: 150 }}>
          <Swiper
            loop
            initPage={initPage7}
            direction="vertical"
            autoPlay="3000"
            height="150"
            paginationVisible
          >
            {list.map((item) => {
              return (
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
        </div>
        <h2>{translated.horizontalCenter}</h2>
        <div className="demo-box " style={{ height: 150 }}>
          <Swiper
            loop={false}
            initPage={initPage8}
            autoPlay="0"
            height="150"
            paginationVisible
            width="280"
            isCenter
          >
            {list.map((item) => {
              return (
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
        </div>
        <h2>{translated.verticalCenter}</h2>
        <div className="demo-box vertical-center">
          <Swiper
            loop={false}
            initPage={initPage9}
            direction="vertical"
            autoPlay="0"
            height="220"
            paginationVisible
            isCenter
            style={{ height: '280px' }}
          >
            {list.map((item) => {
              return (
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default SwiperDemo
