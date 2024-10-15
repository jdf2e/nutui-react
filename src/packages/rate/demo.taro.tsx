import React, { CSSProperties } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
// import Demo1 from './demos/taro/demo1'
// import Demo2 from './demos/taro/demo2'
// import Demo3 from './demos/taro/demo3'
// import Demo4 from './demos/taro/demo4'
// import Demo5 from './demos/taro/demo5'
// import Demo6 from './demos/taro/demo6'
// import Demo7 from './demos/taro/demo7'
// import Demo8 from './demos/taro/demo8'
// import Demo9 from './demos/taro/demo9'
// import Demo10 from './demos/taro/demo10'
// import Demo11 from './demos/taro/demo11'
// import Demo12 from './demos/taro/demo12'

const RateDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      control: '受控方式',
      halfStar: '半星',
      customIcon: '自定义 Icon',
      customQuantity: '自定义数量',
      minimumNumber: '最少选中数量（支持半星）',
      customColor: '自定义颜色',
      disabled: '禁用状态',
      readOnly: '只读状态',
      event: '绑定事件',
      touchable: '滑动选择',
      touchend: '滑动事件',
    },
    'zh-TW': {
      basic: '基礎用法',
      control: '受控方式',
      halfStar: '半星',
      customIcon: '自定義 Icon',
      customQuantity: '自定義數量',
      minimumNumber: '最少選中數量（支持半星）',
      customColor: '自定義顏色',
      disabled: '禁用狀態',
      readOnly: '只讀狀態',
      event: '綁定事件',
      touchable: '滑動選擇',
      touchend: '滑動事件',
    },
    'en-US': {
      basic: 'Basic Usage',
      control: 'Controlled Mode',
      halfStar: 'Half Star',
      customIcon: 'Custom Icon',
      customQuantity: 'Custom Quantity',
      minimumNumber: 'Minimum Number(support half star)',
      customColor: 'Custom Color',
      disabled: 'Disabled',
      readOnly: 'Readonly',
      event: 'Event',
      touchable: 'Touch to Select',
      touchend: 'Touch Event',
    },
  })
  const cellStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Cell style={cellStyle}>
          TODO：icon 问题需先解决
          {/* <Demo1 /> */}
        </Cell>
        {/*
        <View className="h2">{translated.control}</View>
        <Cell style={cellStyle}>
          <Demo2 />
        </Cell>

        <View className="h2">{translated.halfStar}</View>
        <Cell style={cellStyle}>
          <Demo3 />
        </Cell>

        <View className="h2">{translated.customIcon}</View>
        <Cell style={cellStyle}>
          <Demo4 />
        </Cell>

        <View className="h2">{translated.customQuantity}</View>
        <Cell style={cellStyle}>
          <Demo5 />
        </Cell>

        <View className="h2">{translated.minimumNumber}</View>
        <Cell style={cellStyle}>
          <Demo6 />
        </Cell>

        <View className="h2">{translated.customColor}</View>
        <Cell style={cellStyle}>
          <Demo7 />
        </Cell>

        <View className="h2">{translated.disabled}</View>
        <Cell style={cellStyle}>
          <Demo8 />
        </Cell>

        <View className="h2">{translated.readOnly}</View>
        <Cell style={cellStyle}>
          <Demo9 />
        </Cell>

        <View className="h2">{translated.event}</View>
        <Cell style={cellStyle}>
          <Demo10 />
        </Cell>

        <View className="h2">{translated.touchable}</View>
        <Cell style={cellStyle}>
          <Demo11 />
        </Cell>

        <View className="h2">{translated.touchend}</View>
        <Cell style={cellStyle}>
          <Demo12 />
        </Cell> */}
      </ScrollView>
    </>
  )
}

export default RateDemo
