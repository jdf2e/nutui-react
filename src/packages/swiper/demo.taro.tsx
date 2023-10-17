import React, { useState, useEffect, useRef } from 'react'
import '@/packages/swiper/demo.scss'
import Taro from '@tarojs/taro'
import { Left, Right } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Swiper } from '@/packages/nutui.react.taro'
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
      basic: '基础用法',
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

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]

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
        <Swiper defaultValue={1} autoPlay indicator>
          {list.map((item, index) => (
            <Swiper.Item key={item} className="demo-class">
              <img
                width="100%"
                height="100%"
                onClick={() => console.log(index)}
                src={item}
                alt=""
              />
            </Swiper.Item>
          ))}
        </Swiper>
        <h2>{translated.asyc}</h2>
        <Swiper defaultValue={0} indicator>
          {asyncList.map((item, index) => (
            <Swiper.Item key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </Swiper.Item>
          ))}
        </Swiper>

        <h2>{translated.size}</h2>
        <Swiper
          className="swiper-demo-size"
          width={300}
          height={150}
          defaultValue={0}
        >
          {list.map((item) => (
            <Swiper.Item key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </Swiper.Item>
          ))}
        </Swiper>

        <h2>{translated.indicator}</h2>
        <Swiper
          defaultValue={0}
          onChange={(e) => {
            console.log('e.detail.current', e.detail.current)
            setCurrent(e.detail.current)
          }}
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
            <Swiper.Item key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </Swiper.Item>
          ))}
        </Swiper>

        <h2>{translated.btns}</h2>
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
              className="nut-swiper-btns__left"
              onClick={(e) => swiperRef.current?.prev()}
            >
              <Left />
            </span>
            <span
              className="nut-swiper-btns__left"
              onClick={(e) => swiperRef.current?.next()}
            >
              <Right />
            </span>
          </div>
        </div>
        <h2>{translated.vertical}</h2>
        <Swiper defaultValue={0} direction="vertical">
          {list.map((item) => (
            <Swiper.Item key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </Swiper.Item>
          ))}
        </Swiper>
        <h2>{translated.horizontalCenter}</h2>
        <Swiper defaultValue={0} loop previousMargin="20px" nextMargin="20px">
          {list.map((item) => (
            <Swiper.Item key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </Swiper.Item>
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
            <Swiper.Item key={item}>
              <img width="100%" height="100%" src={item} alt="" />
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default SwiperDemo
