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

const FormDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title2: '表单校验',
      title3: '带有初始值表单校验',
      relatedDisplay: '关联展示',
      title4: 'Form.useForm 对表单数据域进行交互。',
      title5: '表单类型',
      validateTrigger: '校验触发时机',
    },
    'en-US': {
      basic: 'Basic Usage',
      title2: 'Validate Form',
      title3: 'InitialValue Validate Type',
      relatedDisplay: 'Related Display',
      title4: 'Interact with form data fields via Form.useForm',
      title5: 'Form Type',
      validateTrigger: 'Validate Trigger',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.title2}</View>
        <Demo2 />
        <View className="h2">{translated.relatedDisplay}</View>
        <Demo3 />
        <View className="h2">{translated.title3}</View>
        <Demo4 />
        <View className="h2">{translated.title4}</View>
        <Demo5 />
        <View className="h2">{translated.validateTrigger}</View>
        <Demo6 />
        <View className="h2">{translated.title5}</View>
        <Demo7 />
      </ScrollView>
    </>
  )
}

export default FormDemo
