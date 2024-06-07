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
import Demo14 from './demos/taro/demo14'
import Demo15 from './demos/taro/demo15'

const CheckboxDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      uncontrolled: '非受控',
      controlled: '受控',
      basic: '基础用法',
      checkbox: '复选框',
      disbaled: '禁用状态',
      selective: '半选状态',
      customSize: '自定义尺寸',
      customIcon: '自定义图标',
      triggerEvent: '点击触发事件',
      Disabled: '禁用',
      selectAndCancel: '全选和取消',
      options: '配置 options 渲染复选按钮',
      max: 'checkboxGroup使用，限制最大可选数（3个）, 至少选择数（1个）',
      threeState: '全选/半选/取消',
      list: '列表',
    },
    'zh-TW': {
      uncontrolled: '非受控',
      controlled: '受控',
      basic: '基礎用法',
      checkbox: '復選框',
      disbaled: '禁用狀態',
      selective: '半選狀態',
      customSize: '自定義尺寸',
      customIcon: '自定義圖標',
      triggerEvent: '點擊觸發事件',
      Disabled: '禁用',
      selectAndCancel: '全選和取消',
      options: '配置 options 渲染復選按鈕',
      max: 'checkboxGroup使用，限製最大可選數（3個）, 至少選擇數（1個）',
      threeState: '全選/半選/取消',
      list: '列表',
    },
    'en-US': {
      uncontrolled: 'Uncontrolled',
      controlled: 'Controlled',
      basic: 'Basic Usage',
      checkbox: 'Checkbox',
      disbaled: 'Disabled State',
      selective: 'Half-selected State',
      customSize: 'Custom Size',
      customIcon: 'Custom Icon',
      triggerEvent: 'Click Trigger Event',
      Disabled: 'Checkbox.Group Disabled',
      selectAndCancel: 'Select All And Cancel',
      options: 'Configure Options To Render Check Buttons',
      max: 'Used by checkboxGroup, limit the maximum number of options (3), and the minimum number of choices (1)',
      threeState: 'Select All/Half/Cancel',
      list: 'List',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.uncontrolled}</View>
        <Demo1 />
        <View className="h2">{translated.controlled}</View>
        <Demo2 />
        <View className="h2">{translated.basic}</View>
        <Demo3 />
        <View className="h2">{translated.selective}</View>
        <Demo4 />
        <View className="h2">{translated.disbaled}</View>
        <Demo5 />
        <View className="h2">{translated.customSize}</View>
        <Demo6 />
        <View className="h2">{translated.customIcon}</View>
        <Demo7 />
        <View className="h2">{translated.triggerEvent}</View>
        <Demo8 />
        <View className="h2">Checkbox.Group</View>
        <Demo9 />
        <View className="h2">{translated.Disabled}</View>
        <Demo10 />
        <View className="h2">{translated.selectAndCancel}</View>
        <Demo11 />
        <View className="h2">{translated.max}</View>
        <Demo12 />
        <View className="h2">{translated.threeState}</View>
        <Demo13 />
        <View className="h2">{translated.options}</View>
        <Demo14 />
        <View className="h2">{translated.list}</View>
        <Demo15 />
      </ScrollView>
    </>
  )
}

export default CheckboxDemo
