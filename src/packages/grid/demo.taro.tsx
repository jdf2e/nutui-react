import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import { harmony } from '@/utils/platform-taro'
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

const GridDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      columns: '自定义列数',
      custom: '自定义格子',
      gap: '格子间距',
      reverse: '内容翻转',
      horizontal: '内容横向',
      reverseHorizontal: '内容翻转 + 横向',
      iconStyle: '图标颜色/大小',
      customContent: '自定义内容',
      event: '点击子项事件',
    },
    'zh-TW': {
      basic: '基础用法',
      columns: '自定義列數',
      custom: '自定義格子',
      gap: '格子間距',
      reverse: '內容翻轉',
      horizontal: '內容橫向',
      reverseHorizontal: '內容翻轉 + 橫向',
      iconStyle: '圖標顏色/大小',
      customContent: '自定義內容',
      event: '點擊子項事件',
    },
    'en-US': {
      basic: 'Basic Usage',
      columns: 'Column Num',
      custom: 'Custom Grids',
      gap: 'Gap',
      reverse: 'Reverse',
      horizontal: 'Horizontal',
      reverseHorizontal: 'Reverse & Horizontal',
      iconStyle: 'Icon Style',
      customContent: 'Custom Content',
      event: 'Grid Item Click',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ paddingBottom: '100px' }}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.columns}</View>
        <Demo2 />
        {/* harmony 不支持 css 变量 */}
        {harmony() ? null : (
          <>
            <View className="h2">{translated.custom}</View>
            <Demo3 />
          </>
        )}
        <View className="h2">{translated.gap}</View>
        <Demo4 />
        <View className="h2">{translated.reverse}</View>
        <Demo5 />
        <View className="h2">{translated.horizontal}</View>
        <Demo6 />
        <View className="h2">{translated.reverseHorizontal}</View>
        <Demo7 />
        <View className="h2">{translated.iconStyle}</View>
        <Demo8 />
        <View className="h2">{translated.customContent}</View>
        <Demo9 />
        <View className="h2">{translated.event}</View>
        <Demo10 />
      </ScrollView>
    </>
  )
}

export default GridDemo
