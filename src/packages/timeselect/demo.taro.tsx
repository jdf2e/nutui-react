import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const TimeSelectDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      optionKey: '自定义数据 key',
      multiple: '支持多选',
      custom: '自定义使用场景',
    },
    'zh-TW': {
      basic: '基础用法',
      optionKey: '自定义数据 key',
      multiple: '支持多选',
      custom: '自定义使用场景',
    },
    'en-US': {
      basic: 'Basic Usage',
      optionKey: 'Custom optionKey',
      multiple: 'Multiple Mode',
      custom: 'Custom Usage',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.optionKey}</h2>
        <Demo2 />
        <h2>{translated.multiple}</h2>
        <Demo3 />
        <h2>{translated.custom}</h2>
        <Demo4 />
      </div>
    </>
  )
}

export default TimeSelectDemo
