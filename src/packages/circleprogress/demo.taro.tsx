import React from 'react'
import Taro from '@tarojs/taro'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import '@/packages/circleprogress/demo.scss'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const CircleProgressDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '基础用法',
      '67eacf7f': '环形进度条自定义样式',
      '3fee7d50': '环形进度条自定义颜色(支持渐变色)',
      f4aa4b4c: '环形进度条自定义大小',
      '9daa2dd9': '环形进度条自定义内容',
      c3e31425: '动态改变环形进度条的进度',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      '67eacf7f': '環形進度條自定義樣式',
      '3fee7d50': '環形進度條自定義顏色(支持漸變色)',
      f4aa4b4c: '環形進度條自定義大小',
      '9daa2dd9': '環形進度條自定義內容',
      c3e31425: '動態改變環形進度條的進度',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
      '67eacf7f': 'Ring progress bar custom style',
      '3fee7d50': 'Ring progress bar custom color (support gradient color)',
      f4aa4b4c: 'Ring progress bar custom size',
      '9daa2dd9': 'Ring progress bar custom content',
      c3e31425: 'Dynamically change the progress of the circular progress bar',
    },
  })

  return (
    <>
      <Header />
      <div
        className={`demo ${
          Taro.getEnv() === 'WEB' ? 'web' : ''
        } demo-circleprogress`}
      >
        <h2>{translated['84aa6bce']}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <Demo1 />
        </Cell>
        <h2>{translated['67eacf7f']}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <Demo2 />
        </Cell>
        <h2>{translated['3fee7d50']}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <Demo3 />
        </Cell>
        <h2>{translated.f4aa4b4c}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <Demo4 />
        </Cell>
        <h2>{translated['9daa2dd9']}</h2>
        <Cell style={{ justifyContent: 'center' }}>
          <Demo5 />
        </Cell>
        <h2>{translated.c3e31425}</h2>
        <Demo6 />
      </div>
    </>
  )
}

export default CircleProgressDemo
