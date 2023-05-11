import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { TextArea, ConfigProvider } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

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

  const [value, setValue] = useState(translated.controlled)

  const customTheme = {
    nutuiTextareaTextCurrorColor: `red`,
    nutuiTextareaLimitColor: `red`,
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <TextArea
          defaultValue={translated.basic}
          className="text-1"
          style={{ fontSize: '12px' }}
          onChange={(value) => {
            console.log('change', value)
          }}
          onBlur={() => {
            console.log('blur')
          }}
          onFocus={() => {
            console.log('focus')
          }}
        />
        <h2>{translated.controlled}</h2>
        <TextArea
          value={value}
          onChange={(value) => {
            setValue(value)
          }}
        />
        <h2>{translated.numbers}</h2>
        <TextArea showCount maxLength={20} />
        <h2>{translated.autoHeight}</h2>
        <TextArea rows={1} autoSize />
        <h2>{translated.we2312222}</h2>
        <ConfigProvider theme={customTheme}>
          <TextArea showCount maxLength={20} />
        </ConfigProvider>
        <h2>{translated.readOnly}</h2>
        <TextArea
          readOnly
          defaultValue={`textarea${translated.readOnlyState}`}
        />
        <h2>{translated.disabled}</h2>
        <TextArea
          disabled
          defaultValue={`textarea${translated.disabledState}`}
          showCount
          maxLength={20}
        />
        <h2>{translated.textAlign}</h2>
        <TextArea
          defaultValue={translated.alignRight}
          style={{
            textAlign: 'right',
          }}
        />
      </div>
    </>
  )
}

export default TextAreaDemo
