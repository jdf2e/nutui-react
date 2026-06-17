import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
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
      ce5c5446: '全屏 full',
      c38a08ee: '半屏 half',
      c38a08ed: '局部 partial',
      c38a08ef: '自定义图片大小',
      b840c88f: '图片类型，内置8个',
      a74a1fd4: '自定义图片',
      '8dab2f66': '自定义底部按钮',
    },
    'zh-TW': {
      ce5c5446: '全屏 full',
      c38a08ee: '半屏 half',
      c38a08ed: '局部 partial',
      c38a08ef: '自定義圖片大小',
      b840c88f: '圖片類型，內置8個',
      a74a1fd4: '自定義圖片',
      '8dab2f66': '自定義底部按鈕',
    },
    'en-US': {
      ce5c5446: 'Full',
      c38a08ee: 'Half',
      c38a08ed: 'Partial',
      c38a08ef: 'Custom image size',
      b840c88f: 'Picture type, built-in 8',
      a74a1fd4: 'Custom image',
      '8dab2f66': 'Custom bottom buttons',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.ce5c5446}</View>
        <Demo1 />
        <View className="h2">{translated.c38a08ee}</View>
        <Demo2 />
        <View className="h2">{translated.c38a08ed}</View>
        <Demo3 />
        <View className="h2">{translated.b840c88f}</View>
        <Demo4 />
        <View className="h2">{translated.c38a08ef}</View>
        <Demo7 />
        <View className="h2">{translated.a74a1fd4}</View>
        <Demo5 />
        <View className="h2">{translated['8dab2f66']}</View>
        <Demo6 />
      </ScrollView>
    </>
  )
}

export default EmptyDemo
