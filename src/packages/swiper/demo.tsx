import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react'
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
  multiItems: string
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
      multiItems: '一屏多个数据时',
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
      multiItems: 'many datas in a frame',
    },
  })
  const swiperRef = React.useRef<any>(null)

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

  return (
    <div className="demo padding">
      <h2>{translated.basic}</h2>
      <div className="demo-box" style={{ height: 150 }}>
        <Swiper>
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} onClick={() => console.log(index)} alt="" />
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SwiperDemo
