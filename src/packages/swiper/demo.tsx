import React, { useState, useEffect, type CSSProperties } from 'react'
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

  const [defaultValue6, setdefaultValue6] = useState(0)
  const [current2, setCurrent2] = useState(1)

  const onChange3 = (e: number) => {
    setCurrent(e + 1)
  }
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
  const btnsStyle: CSSProperties = {
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-15px)',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: '0px',
  }
  const spanStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
  return (
    <div className="demo padding">
      <h2>{translated.basic}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          autoPlay
          loop
          slideSize={300}
          indicator
          style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
        >
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={list[index]} alt={list[index]} draggable={false} />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.focus}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper loop slideSize={300} effect={{ name: 'focus', scale: 0.9 }}>
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={list[index]} alt={list[index]} draggable={false} />
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
                  <img src={list[index]} alt={list[index]} draggable={false} />
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
                <img src={list[index]} alt={list[index]} draggable={false} />
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
                <img src={list[index]} alt={list[index]} draggable={false} />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.btns}</h2>
      <div className="demo-box" style={{ height: 150, position: 'relative' }}>
        <Swiper
          ref={swiperRef}
          defaultValue={defaultValue6}
          onChange={(e) => setCurrent2(e + 1)}
          loop
          indicator={<div style={pageStyle}> {current2}/4 </div>}
        >
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={list[index]} alt={list[index]} draggable={false} />
              </Swiper.Item>
            )
          })}
        </Swiper>
        <div style={btnsStyle}>
          <span style={spanStyle} onClick={(e) => handlePrev()}>
            <ArrowLeft />
          </span>
          <span style={spanStyle} onClick={(e) => handleNext()}>
            <ArrowRight />
          </span>
        </div>
      </div>
      <h2>{translated.vertical}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper loop direction="vertical">
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={list[index]} alt={list[index]} draggable={false} />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.horizontalCenter}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper loop style={{ '--swiper-offset': '6%' }} slideSize={300}>
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={list[index]} alt={list[index]} draggable={false} />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.verticalCenter}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          loop
          direction="vertical"
          style={{ '--swiper-offset': '13%' }}
          slideSize={120}
        >
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={list[index]} alt={list[index]} draggable={false} />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SwiperDemo
