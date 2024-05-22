import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell } from '@/packages/nutui.react.taro'
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

const InputNumberDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '6333c786': '超出限制事件触发',
      '0137871a': '异步演示2秒后更改',
      '84aa6bce': '基础用法',
      '55cc5fb7': '步长设置',
      '9636103a': '限制输入范围',
      '181965e2': '禁用操作',
      e7b2ce1f: '只读禁用输入框',
      e7b2ce1g: '自定义按钮样式',
      '3a42134b': '支持小数点',
      '65bafb1d': '支持异步修改',
      '7e2394ae': '自定义按钮大小',
      '7e2394be': '支持formatter',
    },
    'zh-TW': {
      '6333c786': '超出限制事件觸發',
      '0137871a': '異步演示2秒後更改',
      '84aa6bce': '基礎用法',
      '55cc5fb7': '步長設置',
      '9636103a': '限制輸入範圍',
      '181965e2': '禁用操作',
      e7b2ce1f: '只讀禁用輸入框',
      e7b2ce1g: '自定義按钮样式',
      '3a42134b': '支持小數點',
      '65bafb1d': '支持異步修改',
      '7e2394ae': '自定義按鈕大小',
      '7e2394be': '支持formatter',
    },
    'en-US': {
      '6333c786': 'Exceeded limit event triggered',
      '0137871a': 'Async demo changes after 2 seconds',
      '84aa6bce': 'Basic usage',
      '55cc5fb7': 'Step size setting',
      '9636103a': 'Limit input range',
      '181965e2': 'Disable operation',
      e7b2ce1f: 'read-only disabled input box',
      e7b2ce1g: 'Custom Button CSS',
      '3a42134b': 'support decimal point',
      '65bafb1d': 'Support for asynchronous modification',
      '7e2394ae': 'custom button size',
      '7e2394be': 'support formatter',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated['84aa6bce']}</View>
        <Cell>
          <Demo1 />
        </Cell>

        <View className="h2">{translated['55cc5fb7']}</View>
        <Cell>
          <Demo2 />
        </Cell>

        <View className="h2">{translated['9636103a']}</View>
        <Cell>
          <Demo3 />
        </Cell>

        <View className="h2">{translated['181965e2']}</View>
        <Cell>
          <Demo4 />
        </Cell>

        <View className="h2">{translated.e7b2ce1f}</View>
        <Cell>
          <Demo5 />
        </Cell>

        <View className="h2">{translated.e7b2ce1g}</View>
        <Demo6 />

        <View className="h2">{translated['3a42134b']}</View>
        <Cell>
          <Demo7 />
        </Cell>

        <View className="h2">{translated['65bafb1d']}</View>
        <Cell>
          <Demo8 />
        </Cell>

        <View className="h2">Formatter</View>
        <Demo9 />
      </ScrollView>
    </>
  )
}

export default InputNumberDemo
