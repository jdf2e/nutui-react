import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
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

const ImageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      fill: '填充模式',
      position: '图片位置',
      circle: '圆形图片',
      loading: '加载中提示',
      error: '加载失败',
      lazyload: '图片懒加载',
      imageText: 'Image + text 模式',
    },
    'en-US': {
      basic: 'Basic Usage',
      fill: 'Object Fill',
      position: 'Object Position',
      circle: 'Round',
      loading: 'Loading',
      error: 'Error',
      lazyload: 'Lazyload',
      imageText: 'Image + text ',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Cell>
          <Demo1 />
        </Cell>
        <View className="h2">{translated.circle}</View>
        <Cell>
          <Demo2 />
        </Cell>
        {!['HARMONY', 'RN'].includes(Taro.getEnv()) && (
          <>
            <View className="h2">{translated.loading}</View>
            <Cell>
              <Demo3 />
            </Cell>
            <View className="h2">{translated.error}</View>
            <Cell>
              <Demo4 />
            </Cell>
          </>
        )}

        <View className="h2">{translated.imageText}</View>
        <Cell>
          <Demo5 />
        </Cell>
        <View className="h2">{translated.fill}</View>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo6 />
        </Cell>
        <View className="h2">{translated.position}</View>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo7 />
        </Cell>
        {!['RN', 'HARMONY'].includes(Taro.getEnv()) && (
          <>
            <View className="h2">{translated.lazyload}</View>
            <Demo8 />
          </>
        )}
      </ScrollView>
    </>
  )
}

export default ImageDemo
