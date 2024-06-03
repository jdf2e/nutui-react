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
import Demo9 from './demos/taro/demo9'
import Demo10 from './demos/taro/demo10'
import Demo11 from './demos/taro/demo11'
import Demo12 from './demos/taro/demo12'
import Demo13 from './demos/taro/demo13'

const RangeDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '双滑块',
      title2: '指定范围',
      title3: '设置步长',
      title4: '隐藏范围',
      title5: '隐藏标签',
      title6: '禁用',
      title7: '自定义样式',
      title8: '自定义按钮',
      title9: '垂直方向',
      title10: '刻度标记',
      title11: '自定义描述',
      controlled: '受控方式',
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Dual thumb',
      title2: 'Range',
      title3: 'Step Size',
      title4: 'Hidden Range',
      title5: 'Hidden Tag',
      title6: 'Disabled',
      title7: 'Custom Style',
      title8: 'Custom Button',
      title9: 'Vertical',
      title10: 'Marks',
      title11: 'Range Desc',
      controlled: 'Controlled',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.title}</View>
        <Demo1 />
        <View className="h2">{translated.controlled}</View>
        <Demo2 />
        <View className="h2">{translated.title11}</View>
        <Demo3 />
        <View className="h2">{translated.title1}</View>
        <Demo4 />
        <View className="h2">{translated.title2}</View>
        <Demo5 />
        <View className="h2">{translated.title3}</View>
        <Demo6 />
        <View className="h2">{translated.title4}</View>
        <Demo7 />
        <View className="h2">{translated.title5}</View>
        <Demo8 />
        <View className="h2">{translated.title6}</View>
        <Demo9 />
        <View className="h2">{translated.title7}</View>
        <Demo10 />
        <View className="h2">{translated.title8}</View>
        <Demo11 />
        <View className="h2">{translated.title9}</View>
        <Demo12 />
        <View className="h2">{translated.title10}</View>
        <Demo13 />
      </ScrollView>
    </>
  )
}

export default RangeDemo
