import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'

interface T {
  basic: string
  controlled: string
  numbers: string
  autoHeight: string
  we2312222: string
  readOnly: string
  readOnlyState: string
  disabled: string
  disabledState: string
  textAlign: string
  alignRight: string
}

const TextAreaDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      controlled: '受控方式',
      numbers: '显示字数统计',
      autoHeight: '自定义行数，设置自动高度',
      we2312222: '自定义字数统计样式',
      readOnly: '只读',
      readOnlyState: '只读状态',
      disabled: '禁用',
      disabledState: '禁用状态',
      textAlign: '文本位置',
      alignRight: '文本居右',
    },
    'zh-TW': {
      basic: '基礎用法',
      controlled: '受控方式',
      numbers: '顯示數字統計',
      autoHeight: '自定義行數，設置自動高度',
      we2312222: '自定義字数统计样式',
      readOnly: '只讀',
      readOnlyState: '只讀狀態',
      disabled: '禁用',
      disabledState: '禁用狀態',
      textAlign: '文本位置',
      alignRight: '文本居右',
    },
    'en-US': {
      basic: 'Basic usage',
      controlled: 'Controlled',
      numbers: 'Displays numerical',
      autoHeight: 'Custom rows, auto height',
      we2312222: 'Custom limit color',
      readOnly: 'Read only',
      readOnlyState: 'Read-only status',
      disabled: 'Disable',
      disabledState: 'Disabled state',
      textAlign: 'TextAlign',
      alignRight: 'TextAlign Right',
    },
  })

  return (
    <>
      <div className="demo" style={{ paddingBottom: '20px' }}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.controlled}</h2>
        <Demo2 />
        <h2>{translated.numbers}</h2>
        <Demo3 />
        <h2>{translated.autoHeight}</h2>
        <Demo4 />
        <h2>{translated.we2312222}</h2>
        <Demo5 />
        <h2>{translated.readOnly}</h2>
        <Demo6 />
        <h2>{translated.disabled}</h2>
        <Demo7 />
        <h2>{translated.textAlign}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default TextAreaDemo
