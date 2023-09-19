import React, { useState, useEffect } from 'react'
import { Left, Right } from '@nutui/icons-react'
// import Swiper.Item from '@/packages/swiperitem'
import Swiper from '@/packages/swiper'
import '@/packages/swiper/demo.scss'
import { useTranslate } from '../../sites/assets/locale'

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
  const swiperRef = React.useRef<any>(null)
  const [height] = useState<any>(150)
  const [initPage1] = useState<any>(0)
  const [initPage2] = useState<any>(0)
  const [initPage3] = useState<any>(0)
  const [initPage4] = useState<any>(0)
  const [initPage5] = useState<any>(0)
  const [initPage6] = useState<any>(0)
  const [initPage7] = useState<any>(0)
  const [initPage8] = useState<any>(0)
  const [initPage9] = useState<any>(0)
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
    <div className="demo padding">
      <h2>{translated.basic}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
          height={height}
          autoPlay="2000"
          defaultValue={initPage1}
          onChange={onChange}
          indicator
        >
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} onClick={() => console.log(index)} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.asyc}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          height={height}
          style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
          autoPlay="2000"
          defaultValue={initPage2}
          onChange={onChange}
          indicator
        >
          {list1.map((item) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.dynamicDel}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          height={height}
          style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
          autoPlay="2000"
          defaultValue={initPage3}
          onChange={onChange}
          indicator
        >
          {list2.map((item) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>

      <h2>{translated.size}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper defaultValue={initPage4} width="300" height={height}>
          {list.map((item) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.indicator}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          loop
          height={height}
          defaultValue={initPage5}
          onChange={(e) => setCurrent(e + 1)}
          indicator={<div className="page"> {current}/4 </div>}
        >
          {list.map((item) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.btns}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper
          ref={swiperRef}
          height={height}
          loop
          defaultValue={initPage6}
          onChange={(e) => setCurrent2(e + 1)}
          indicator={<div className="page"> {current2}/4 </div>}
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
          <span className="nut-swiper-btns__left" onClick={(e) => handlePrev()}>
            <Left />
          </span>
          <span className="nut-swiper-btns__left" onClick={(e) => handleNext()}>
            <Right />
          </span>
        </div>
      </div>
      <h2>{translated.vertical}</h2>
      <div className="demo-box vertical-center" style={{ height: 150 }}>
        <Swiper
          loop
          defaultValue={initPage7}
          direction="vertical"
          autoPlay="3000"
          height={height}
          indicator
        >
          {list.map((item) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.horizontalCenter}</h2>
      <div className="demo-box " style={{ height: 150 }}>
        <Swiper
          defaultValue={initPage8}
          autoPlay="0"
          height={height}
          indicator
          width="280"
          center
        >
          {list.map((item) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      <h2>{translated.verticalCenter}</h2>
      <div className="demo-box vertical-center">
        <Swiper
          defaultValue={initPage9}
          direction="vertical"
          autoPlay="0"
          height="220"
          indicator
          center
          style={{ height: '280px' }}
        >
          {list.map((item) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SwiperDemo
