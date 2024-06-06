import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const AddressDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      customAddress: '选择自定义地址',
      selectCity: '选中省市区',
      existList: '选择已有地址',
      icon: '自定义图标',
      change: '自定义地址与已有地址切换',
      uncontrolled: '非受控方式',
    },
    'zh-TW': {
      customAddress: '選擇自定義地址',
      selectCity: '選中省市區',
      existList: '選擇已有地址',
      icon: '自定義圖標',
      change: '自定義地址與已有地址切換',
      uncontrolled: '非受控方式',
    },
    'en-US': {
      customAddress: 'Choose Custom Address',
      selectCity: 'Choose City',
      existList: 'Choose Exist Address',
      icon: 'Custom Icon',
      change: 'Custom Or Exist',
      uncontrolled: 'Uncontrolled',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.customAddress}</View>
        <Demo1 />
        <View className="h2">{translated.selectCity}</View>
        <Demo2 />
        <View className="h2">{translated.existList}</View>
        <Demo3 />
        <View className="h2">{translated.icon}</View>
        <Demo4 />
        <View className="h2">{translated.change}</View>
        <Demo5 />
        <View className="h2">{translated.uncontrolled}</View>
        <Demo6 />
      </ScrollView>
    </>
  )
}

export default AddressDemo
