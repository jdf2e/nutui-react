import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import { Toast } from '@nutui/nutui-react-taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import { harmony, web } from '@/utils/platform-taro'

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

  return (
    <>
      <Header />
      <ScrollView className={`demo ${web() ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.toastFunction}</View>
        <Toast id="test" />
        <Demo2 />
        <View className="h2">{translated.toastDuration}</View>
        <Demo3 />
        <View className="h2">{translated.toastCustomIcon}</View>
        <Demo4 />
        {/* rn和 鸿蒙不支持 break-all */}
        {harmony() ? null : (
          <>
            <View className="h2">{translated.toastWordBreak}</View>
            <Demo5 />
          </>
        )}
      </ScrollView>
    </>
  )
}

export default ToastDemo
