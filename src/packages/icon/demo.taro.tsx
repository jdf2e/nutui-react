import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
// import '@nutui/icons-react-taro/dist/style_iconfont.css'
import { Toast } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'

const IconDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '基础用法: SVG',
      dab8a74f: '图片链接',
      '52c15454': '图标颜色',
      '7aeb5407': '图标大小',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法: SVG',
      dab8a74f: '圖片連結',
      '52c15454': '圖示顏色',
      '7aeb5407': '圖示大小',
    },
    'en-US': {
      '84aa6bce': 'Basic Usage: SVG',
      dab8a74f: 'Image Link',
      '52c15454': 'IconFont Color',
      '7aeb5407': 'IconFont Size',
    },
  })

  const [state, setState] = useState({
    msg: '',
    type: 'text',
    cover: false,
    visible: false,
    duration: 2,
    closeOnOverlayClick: false,
    title: '',
    bottom: '',
    icon: '',
    center: true,
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Toast
          content={state.msg}
          visible={state.visible}
          type={state.type}
          duration={state.duration}
          icon={state.icon}
          closeOnOverlayClick={state.closeOnOverlayClick}
          onClose={() => {
            setState({
              ...state,
              visible: false,
            })
          }}
        />
        <View className="h2">{translated['84aa6bce']}</View>
        <Demo1 />
        <View className="h2">{translated.dab8a74f}</View>
        <Demo3 />
        <View className="h2">{translated['52c15454']}</View>
        <Demo4 />
        <View className="h2">{translated['7aeb5407']}</View>
        <Demo5 />
        <Demo6 />
        <Demo7 />
      </ScrollView>
    </>
  )
}

export default IconDemo
