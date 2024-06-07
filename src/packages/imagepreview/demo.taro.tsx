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

const ImagePreviewDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      withInitNo: '设置初始页码',
      withControl: '受控模式',
      withPagination: '设置轮播指示器及颜色',
      withVideos: '视频、图片预览',
      thumb: '点击缩略图切换',
      closeIcon: '关闭按钮',
    },
    'en-US': {
      basic: 'Basic usage',
      withInitNo: 'With Init No',
      withControl: 'With control',
      withPagination: 'With Pagination',
      withVideos: 'With Videos',
      thumb: 'Click image to switch',
      closeIcon: 'Close Icon',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.thumb}</View>
        <Demo2 />
        <View className="h2">{translated.withInitNo}</View>
        <Demo3 />
        <View className="h2">{translated.withControl}</View>
        <Demo4 />
        <View className="h2">{translated.withPagination}</View>
        <Demo5 />
        <View className="h2">{translated.withVideos}</View>
        <Demo6 />
        <View className="h2">{translated.closeIcon}</View>
        <Demo7 />
      </ScrollView>
    </>
  )
}

export default ImagePreviewDemo
