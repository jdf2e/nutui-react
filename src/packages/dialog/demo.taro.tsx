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
import Demo8 from './demos/taro/demo8'

const DialogDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      funUse: '函数式调用',
      title1: '以下为标签式使用:',
      title10: '基础用法',
      title2: 'footer区域定制',
      title3: '点击取消时，拦截',
      title4: '确认按钮loading效果',
      title5: '带关闭按钮',
      title6: '自定义内容区域',
      title7: '顶部带插图',
    },
    'en-US': {
      funUse: 'Function use',
      title1: 'Labeled use',
      title10: 'Basic use',
      title2: 'Customize footer area',
      title3: 'Intercept when cancel is clicked',
      title4: 'Confirm button loading effect',
      title5: 'With close button',
      title6: 'Custom content area',
      title7: 'Top with picture',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.funUse}</View>
        <Demo1 />
        <View className="h2">{translated.title1}</View>
        <View className="h2">{translated.title10}</View>
        <Demo2 />
        <View className="h2">{translated.title2}</View>
        <Demo3 />
        <View className="h2">{translated.title3}</View>
        <Demo4 />
        <View className="h2">{translated.title4}</View>
        <Demo5 />
        <View className="h2">{translated.title5}</View>
        <Demo6 />
        <View className="h2">{translated.title6}</View>
        <Demo7 />
        <View className="h2">{translated.title7}</View>
        <Demo8 />
      </ScrollView>
    </>
  )
}

export default DialogDemo
