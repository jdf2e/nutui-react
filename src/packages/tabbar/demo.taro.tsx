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

const TabbarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '自定义选中',
      ce5c5448: '只配图标',
      ce5c5440: '无图标',
      b840c88f: '徽标提示',
      a74a1fd4: '自定义颜色',
      '8dab2f66': '可自定义icon个数的tabbar',
      cfbdc781: '固定底部',
      c9e6df49: '红点',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '自定義選中',
      ce5c5448: '只配图标',
      ce5c5440: '无图标',
      b840c88f: '徽標提示',
      a74a1fd4: '自定義顏色',
      '8dab2f66': '可自定義icon個數的tabbar',
      cfbdc781: '固定底部',
      c9e6df49: '紅點',
    },
    'en-US': {
      ce5c5446: 'Basic Usage',
      c38a08ef: 'Custom DefaultValue',
      ce5c5448: 'Only Icon',
      ce5c5440: 'No Icon',
      b840c88f: 'Logo Tips',
      a74a1fd4: 'Custom Color',
      '8dab2f66': 'Tabbar With Custom Number Of Icons',
      cfbdc781: 'Fixed Bottom',
      c9e6df49: 'Dot',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.ce5c5446}</View>
        <Demo1 />
        <View className="h2">{translated.c38a08ef}</View>
        <Demo2 />
        <View className="h2">{translated.ce5c5448}</View>
        <Demo3 />
        <View className="h2">{translated.ce5c5440}</View>
        <Demo4 />
        <View className="h2">{translated.b840c88f}</View>
        <Demo5 />
        <View className="h2">{translated.c9e6df49}</View>
        <Demo6 />
        <View className="h2">{translated.a74a1fd4}</View>
        <Demo7 />
        <View className="h2">{translated['8dab2f66']}</View>
        <Demo8 />
        <View className="h2" style={{ marginBottom: '100px' }}>
          {translated.cfbdc781}
        </View>
        <Demo9 />
      </ScrollView>
    </>
  )
}

export default TabbarDemo
