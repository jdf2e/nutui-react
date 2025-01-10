import React from 'react'
import './demo.scss'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
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
import { harmony } from '@/utils/platform-taro'

const SwiperDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      asyc: '异步加载(3s)',
      size: '自定义大小',
      indicator: '自定义指示器',
      btns: '手动切换',
      vertical: '垂直方向',
      horizontalCenter: '水平居中展示（无指示器）',
      verticalCenter: '垂直居中展示',
      multiItems: '一屏多个数据时',
    },
    'en-US': {
      basic: 'Basic Usage',
      asyc: 'Asynchronous loading(3s)',
      size: 'Custom size',
      indicator: 'Custom indicator',
      btns: 'Manual switching',
      vertical: 'Vertical direction',
      horizontalCenter: 'Horizontal center display(no indicator)',
      verticalCenter: 'Vertical center display',
      multiItems: 'many datas in a frame',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} padding`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.asyc}</View>
        <Demo2 />
        <View className="h2">{translated.size}</View>
        <View
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Demo3 />
        </View>
        <View className="h2">{translated.indicator}</View>
        <Demo4 />
        <View className="h2">{translated.btns}</View>
        <Demo5 />
        <View className="h2">{translated.vertical}</View>
        <Demo6 />
        <View className="h2">{translated.horizontalCenter}</View>
        <Demo7 />
        {!harmony() ? (
          <>
            <View className="h2">{translated.verticalCenter}</View>
            <Demo8 />
          </>
        ) : null}
        <View className="h2">{translated.multiItems}</View>
        <Demo9 />
      </ScrollView>
    </>
  )
}

export default SwiperDemo
