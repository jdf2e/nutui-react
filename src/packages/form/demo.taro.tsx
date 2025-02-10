import React from 'react'
import Taro from '@tarojs/taro'
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
      useWatch: 'useWatch',
    },
    'en-US': {
      basic: 'Basic Usage',
      title2: 'Validate Form',
      title3: 'InitialValue Validate Type',
      relatedDisplay: 'Related Display',
      title4: 'Interact with form data fields via Form.useForm',
      title5: 'Form Type',
      validateTrigger: 'Validate Trigger',
      useWatch: 'useWatch',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.title2}</h2>
        <Demo2 />
        <h2>{translated.relatedDisplay}</h2>
        <Demo3 />
        <h2>{translated.title3}</h2>
        <Demo4 />
        <h2>{translated.title4}</h2>
        <Demo5 />
        <h2>{translated.validateTrigger}</h2>
        <Demo6 />
        <h2>{translated.title5}</h2>
        <Demo7 />
        <h2>{translated.useWatch}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default FormDemo
