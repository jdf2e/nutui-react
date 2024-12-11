import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'

const EmptyDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ee: 'Size 为 small 时，可用于半屏',
      c38a08ef: '自定义内容大小',
      b840c88f: '图片类型，内置3个',
      a74a1fd4: '自定义图片',
      '8dab2f66': '底部内容',
      actions: '自定义操作',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ee: 'Size 为 small 时，可用于半屏',
      c38a08ef: '自定義內容大小',
      b840c88f: '圖片類型，內置3個',
      a74a1fd4: '自定義圖片',
      '8dab2f66': '底部內容',
      actions: '自定義操作',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ee: 'Size is small',
      c38a08ef: 'Custom content size',
      b840c88f: 'Picture type, built-in 3',
      a74a1fd4: 'Custom image',
      '8dab2f66': 'Bottom content',
      actions: 'Actions',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.ce5c5446}</h2>
        <Demo1 />
        <h2>{translated.c38a08ee}</h2>
        <Demo2 />
        <h2>{translated.c38a08ef}</h2>
        <Demo3 />
        <h2>{translated.b840c88f}</h2>
        <Demo4 />
        <h2>{translated.a74a1fd4}</h2>
        <Demo5 />
        <h2>{translated['8dab2f66']}</h2>
        <Demo6 />
        <h2>{translated.actions}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default EmptyDemo
