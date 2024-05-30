import React from 'react'
import { View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale//taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const SwitchDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '非受控',
      disabled: '禁用状态',
      asyncControl: '受控',
      customColor: '自定义颜色',
      supportText: '支持文字',
      eventTip: '触发了 onChange 事件，开关状态：',
    },
    'zh-TW': {
      basic: '非受控',
      disabled: '禁用狀態',
      asyncControl: '受控',
      customColor: '自定義顏色',
      supportText: '支持文字',
      eventTip: '觸發了 onChange 事件，開關狀態：',
    },
    'en-US': {
      basic: 'Uncontrolled',
      disabled: 'Disabled',
      asyncControl: 'controlled',
      customColor: 'Custom Color',
      supportText: 'Support Text',
      eventTip: 'Emit onChange event, current state:',
    },
  })
  return (
    <>
      <View className="demo">
        <View className="h2">{translated.basic}</View>
        <Cell>
          <Demo1 />
        </Cell>
        <View className="h2">{translated.asyncControl}</View>
        <Cell>
          <Demo2 />
        </Cell>
        <View className="h2">{translated.disabled}</View>
        <Cell>
          <Demo3 />
        </Cell>
        <View className="h2">{translated.eventTip}</View>
        <Cell>
          <Demo4 />
        </Cell>
        <View className="h2">{translated.customColor}</View>
        <Cell>
          <Demo5 />
        </Cell>
        <View className="h2">{translated.supportText}</View>
        <Cell>
          <Demo6 />
        </Cell>
      </View>
    </>
  )
}

export default SwitchDemo
