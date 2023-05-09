import React, { useState, useEffect, useRef } from 'react'
import '@/packages/swiper/demo.scss'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { SwiperItem, Swiper } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

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
  // const swiperRef = React.useRef<any>(null)
  // const [height] = useState<any>(150)
  // const [paginationColor] = useState<string>('#426543')
  // const [paginationBgColor] = useState<string>('#426ddd')
  // const [initPage1] = useState<any>(0)
  // const [initPage2] = useState<any>(0)
  // const [initPage3] = useState<any>(0)
  // const [initPage4] = useState<any>(0)
  // const [initPage5] = useState<any>(0)
  // const [initPage6] = useState<any>(0)
  // const [initPage7] = useState<any>(0)
  // const [initPage8] = useState<any>(0)
  // const [initPage9] = useState<any>(0)
  // const [current, setCurrent] = useState(1)
  // const [current2, setCurrent2] = useState(1)
  // const [list1, setList1] = useState<string[]>([])
  // const [list2, setList2] = useState<string[]>([
  //   'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  //   'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  //   'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  //   'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  // ])

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  // const onChange = (e: number) => {}
  // const handlePrev = () => {
  //   swiperRef.current.prev()
  // }
  // const handleNext = () => {
  //   swiperRef.current.next()
  // }
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     const arr: any = list.slice()
  //     setList1(arr)
  //     const arr2 = list2.slice()
  //     arr2.splice(1, 1)
  //     setList2(arr2)
  //   }, 3000)
  // }, [])
  const [asyncList, setAsyncList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setAsyncList(list)
    }, 3000)
  }, [])

  const [current, setCurrent] = useState(0)
  const [current2, setCurrent2] = useState(0)

  const swiperRef = useRef<any>(null)

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} padding`}>
        <h2>{translated.basic}</h2>
        <Swiper defaultValue={1}>
          {list.map((item) => (
            <SwiperItem key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </SwiperItem>
          ))}
        </Swiper>
        <h2>{translated.asyc}</h2>
        <Swiper defaultValue={0}>
          {asyncList.map((item) => (
            <SwiperItem key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </SwiperItem>
          ))}
        </Swiper>

        <h2>{translated.size}</h2>
        <Swiper defaultValue={0}>
          {list.map((item) => (
            <SwiperItem key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </SwiperItem>
          ))}
        </Swiper>

        <h2>{translated.indicator}</h2>
        <Swiper
          defaultValue={0}
          onChange={(e) => setCurrent(e.detail.current)}
          indicator={
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '46px',
                height: '22px',
                background: 'rgba(0, 0, 0, 0.33)',
                borderRadius: '22px',
                textAlign: 'center',
                color: '#fff',
                fontSize: '14px',
              }}
            >
              {current + 1}/{list.length}
            </div>
          }
        >
          {list.map((item) => (
            <SwiperItem key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </SwiperItem>
          ))}
        </Swiper>

        <h2>{translated.btns}</h2>
        <div className="demo-box" style={{ height: 150 }}>
          <Swiper
            // loop
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
                <SwiperItem key={item}>
                  <img src={item} alt="" />
                </SwiperItem>
              )
            })}
          </Swiper>
          <div className="nut-swiper-btns">
            <span
              className="nut-swiper-btns__left"
              onClick={(e) => swiperRef.current?.prev()}
            />
            <span
              className="nut-swiper-btns__left"
              onClick={(e) => swiperRef.current?.next()}
            />
          </div>
        </div>
        <h2>{translated.vertical}</h2>
        <Swiper defaultValue={0} direction="vertical">
          {list.map((item) => (
            <SwiperItem key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </SwiperItem>
          ))}
        </Swiper>
        <h2>{translated.horizontalCenter}</h2>
        <Swiper defaultValue={0} loop previousMargin="20px" nextMargin="20px">
          {list.map((item) => (
            <SwiperItem key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </SwiperItem>
          ))}
        </Swiper>
        <h2>{translated.verticalCenter}</h2>
        <Swiper
          defaultValue={0}
          direction="vertical"
          height={220}
          previousMargin="20px"
          nextMargin="20px"
        >
          {list.map((item) => (
            <SwiperItem key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </SwiperItem>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default SwiperDemo
