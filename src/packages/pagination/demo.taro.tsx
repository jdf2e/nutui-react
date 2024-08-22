import React from 'react'
import Taro from '@tarojs/taro'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const PaginationDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      simple: '简单模式',
      lite: '极简模式',
      ellipse: '显示省略号',
      custom: '自定义按钮',
      uncontrolled: '非受控方式',
    },
    'zh-TW': {
      basic: '基礎用法',
      simple: '簡單模式',
      lite: '极简模式',
      ellipse: '顯示省略號',
      custom: '自定義按鈕',
      uncontrolled: '非受控方式',
    },
    'en-US': {
      basic: 'Basic usage',
      simple: 'Simple mode',
      lite: 'lite Mode',
      ellipse: 'Show ellipsis',
      custom: 'Custom button',
      uncontrolled: 'Uncontrolled mode',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated.simple}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.lite}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated.ellipse}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated.custom}</h2>
        <Cell>
          <Demo5 />
        </Cell>
        <h2>{translated.uncontrolled}</h2>
        <Cell>
          <Demo6 />
        </Cell>
      </div>
    </>
  )
}

export default PaginationDemo
