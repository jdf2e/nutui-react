import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react'
import Swiper from '@/packages/swiper'
import '@/packages/swiper/demo.scss'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  basic: string
  focus: string
  asyc: string
  dynamicDel: string
  size: string
  indicator: string
  btns: string
  vertical: string
  horizontalCenter: string
  verticalCenter: string
  multiItems: string
}

const SwiperDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      focus: '焦点轮播',
      asyc: '异步加载(300ms)',
      dynamicDel: '动态加载',
      size: '自定义大小',
      indicator: '自定义指示器',
      btns: '手动切换',
      vertical: '垂直方向',
      horizontalCenter: '水平居中展示',
      verticalCenter: '垂直居中展示',
      multiItems: '一屏多个数据时',
    },
    'en-US': {
      basic: 'Basic Usage',
      focus: 'Focus',
      asyc: 'Asynchronous loading(300ms)',
      dynamicDel: 'Dynamic loading',
      size: 'Custom size',
      indicator: 'Custom indicator',
      btns: 'Manual switching',
      vertical: 'Vertical direction',
      horizontalCenter: 'Horizontal center display',
      verticalCenter: 'Vertical center display',
      multiItems: 'many datas in a frame',
    },
  })
  const swiperRef = React.useRef<any>(null)

  const [asyncList, setAsyncList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setAsyncList([
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
      ])
    }, 300)
  }, [])

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
  const color = ['#97DAE6', '#CCE697', '#D297E5', '#E6BB97']
  return (
    <div className="demo padding">
      <h2>{translated.basic}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper loop slideSize={300}>
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <div
                  style={{
                    background: color[index],
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {color[index]}
                </div>
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.focus}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          autoplay
          loop
          slideSize={300}
          effect={{ name: 'focus', scale: 0.95 }}
        >
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <div
                  style={{
                    background: color[index],
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {color[index]}
                </div>
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.vertical}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper loop direction="vertical">
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <div
                  style={{
                    background: color[index],
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {color[index]}
                </div>
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.asyc}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        {setAsyncList.length ? (
          <Swiper>
            {asyncList.map((item, index) => {
              return (
                <Swiper.Item key={item}>
                  <div
                    style={{
                      background: color[index],
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    {color[index]}
                  </div>
                </Swiper.Item>
              )
            })}
          </Swiper>
        ) : null}
      </div>
      <h2>{translated.size}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper slideSize={250}>
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <div
                  style={{
                    background: color[index],
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {color[index]}
                </div>
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.indicator}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          onChange={onChange}
          indicator={<div className="page"> {current}/4 </div>}
        >
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <div
                  style={{
                    background: color[index],
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {color[index]}
                </div>
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SwiperDemo
