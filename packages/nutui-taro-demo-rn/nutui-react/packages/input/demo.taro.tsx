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
import Demo9 from './demos/taro/demo9'
import Demo10 from './demos/taro/demo10'
import Demo11 from './demos/taro/demo11'
import Demo12 from './demos/taro/demo12'
import Demo13 from './demos/taro/demo13'
import Demo14 from './demos/taro/demo14'

const InputDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      uncontrolled: '非受控',
      controlled: '受控',
      title1: '自定义类型',
      title2: '禁用和只读',
      title3: '显示清除图标',
      title5: '插入按钮',
      title6: '格式化输入内容',
      title7: '显示字数统计',
      title8: '对齐方式',
      title9: '无边框',
      title10: '事件',
      title11: '布局',
      text: '请输入文本',
      password: '请输入密码',
      number: '请输入整数',
      digit: '请输入数字',
      readOnly: '输入框只读',
      disabled: '输入框禁用',
      clear: '显示清除图标',
      clearControlled: '受控下的清除',
      clearButton: '点我清除',
      codeplaceholder: '请输入短信验证码',
      sendCode: '获取验证码',
      border: '边框',
      formatter: '在输入时移除数字',
      formatter2: '在失焦时移除数字',
      align: '文本内容对齐',
      placeholder5: '输入框内容对齐',
      withForm: '配合表单使用',
      text1: '文本',
      password1: '带密码可见',
      wordCount: '字数统计',
    },
    'en-US': {
      basic: 'Basic usage',
      uncontrolled: 'uncontrolled',
      controlled: 'Controlled',
      title1: 'Custom Type',
      title2: 'Disabled and read-only',
      title3: 'Show clear icon',
      title5: 'Insert button',
      title6: 'Format input content',
      title7: 'Display word count',
      title8: 'Alignment',
      title9: 'No Border',
      title10: 'event',
      title11: 'Layout',
      text: 'Please enter text',
      password: 'Please enter a password',
      number: 'Please enter an integer',
      digit: 'Please enter a number',
      readOnly: 'Input box is read-only',
      disabled: 'Input box disabled',
      clear: 'Show clear icon',
      clearControlled: 'Clearing in Controlled Mode',
      clearButton: 'Click to Clear',
      codeplaceholder: 'Please enter the SMS verification code',
      sendCode: 'Get code',
      border: 'border',
      formatter: 'Remove numbers on input',
      formatter2: 'Remove numbers when out of focus',
      align: 'text content alignment',
      placeholder5: 'Input box content alignment',
      withForm: 'With Form',
      text1: 'Text',
      password1: 'Visible with password',
      wordCount: 'Word count',
    },
  })

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ paddingBottom: '20px' }}
      >
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.uncontrolled}</h2>
        <Demo2 />
        <h2>{translated.controlled}</h2>
        <Demo3 />
        <h2>{translated.title1}</h2>
        <Demo4 />
        <h2>{translated.title2}</h2>
        <Demo5 />
        <h2>{translated.title3}</h2>
        <Demo6 />
        <h2>{translated.clearControlled}</h2>
        <Demo7 />
        <h2>{translated.wordCount}</h2>
        <Demo8 />
        <h2>{translated.password1}</h2>
        <Demo9 />
        <h2>{translated.title6}</h2>
        <Demo10 />
        <h2>{translated.title8}</h2>
        <Demo11 />
        <h2>{translated.title10}</h2>
        <Demo12 />
        <h2>{translated.title11}</h2>
        <Demo13 />
        <h2>{translated.border}</h2>
        <Demo14 />
      </div>
    </>
  )
}

export default InputDemo
