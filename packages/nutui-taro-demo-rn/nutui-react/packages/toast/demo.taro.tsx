import React from 'react'
import Taro from '@tarojs/taro'
import { Toast } from '@nutui/nutui-react-taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import { View } from '@tarojs/components'

const ToastDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      toastFunction: '函数调用',
      toastBottom: '自定义底部高度',
      toastTransparent: '加载状态透明遮罩',
      toastCustomIcon: '自定义 Icon',
      toastDuration: '设置展示时长',
      toastWordBreak: '换行截断方式',
    },
    'en-US': {
      basic: 'Basic Usage',
      toastFunction: 'Function',
      toastBottom: 'Custom Bottom Height',
      toastTransparent: 'Loading Transparent Cover',
      toastCustomIcon: 'Custom Icon',
      toastDuration: 'Set Display Duration',
      toastWordBreak: 'Word Break',
    },
  })

  function demoClass() {
    if (Taro.getEnv() === 'WEB') {
      return 'web'
    }
    if (Taro.getEnv() === 'HARMONY') {
      return 'full'
    }
    return ''
  }

  return (
    <>
      <Header />
      <View className={`demo ${demoClass()}`}>
        <View>{translated.basic}</View>
        <Demo1 />
        <View>{translated.toastFunction}</View>
        <Toast id='test' />
        <Demo2 />
        <View>{translated.toastDuration}</View>
        <Demo3 />
        <View>{translated.toastCustomIcon}</View>
        <Demo4 />
        <View>{translated.toastWordBreak}</View>
        <Demo5 /> 
      </View>
    </>
  )
}

export default ToastDemo
