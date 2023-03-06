import React, { useEffect, useState } from 'react'
import { TextArea } from './textarea'
import { useTranslate } from '../../sites/assets/locale'
import ConfigProvider from '@/packages/configprovider'

interface T {
  basic: string
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
      numbers: '显示字数统计',
      autoHeight: '高度自定义，拉伸',
      we2312222: '修改字数统计样式',
      readOnly: '只读',
      readOnlyState: '只读状态',
      disabled: '禁用',
      disabledState: '禁用状态',
      textAlign: '文本位置',
      alignRight: '文本居右',
    },
    'zh-TW': {
      basic: '基礎用法',
      numbers: '顯示數字統計',
      autoHeight: '高度自定義，拉伸',
      we2312222: '修改字数统计样式',
      readOnly: '只讀',
      readOnlyState: '只讀狀態',
      disabled: '禁用',
      disabledState: '禁用狀態',
      textAlign: '文本位置',
      alignRight: '文本居右',
    },
    'en-US': {
      basic: 'Basic usage',
      numbers: 'Displays numerical',
      autoHeight: 'Highly adaptive',
      we2312222: 'reset limit color',
      readOnly: 'Read only',
      readOnlyState: 'Read-only status',
      disabled: 'Disable',
      disabledState: 'Disabled state',
      textAlign: 'TextAlign',
      alignRight: 'TextAlign Right',
    },
  })

  const [value1, updateValue1] = useState('')
  const [value2] = useState('')
  const [value3] = useState('')
  const [value4] = useState('')

  const customTheme = {
    nutuiTextareaTextCurrorColor: `red`,
    nutuiTextareaLimitColor: `#fa2c19`,
  }

  useEffect(() => {
    updateValue1(translated.basic)
  }, [translated])

  const change = (value: any, event: Event) => {
    updateValue1(value)
  }

  return (
    <>
      <div className="demo" style={{ paddingBottom: '20px' }}>
        <h2>{translated.basic}</h2>
        <TextArea
          defaultValue={value1}
          className="text-1"
          style={{ fontSize: '12px' }}
          onChange={(value, event) => {
            change(value, event)
          }}
          onBlur={() => {
            console.log('blur')
          }}
          onFocus={() => {
            console.log('focus')
          }}
        />
        <h2>{translated.numbers}</h2>
        <TextArea defaultValue={value2} limitshow maxlength="20" />
        <h2>{translated.autoHeight}</h2>
        <TextArea defaultValue={value3} rows="1" autosize />
        <h2>{translated.we2312222}</h2>
        <ConfigProvider theme={customTheme}>
          <TextArea defaultValue={value3} limitshow maxlength="20" />
        </ConfigProvider>
        <h2>{translated.readOnly}</h2>
        <TextArea
          readonly
          defaultValue={`textarea${translated.readOnlyState}`}
        />
        <h2>{translated.disabled}</h2>
        <TextArea
          disabled
          defaultValue={`textarea${translated.disabledState}`}
          limitshow
          maxlength="20"
        />
        <h2>{translated.textAlign}</h2>
        <TextArea defaultValue={translated.alignRight} textAlign="right" />
      </div>
    </>
  )
}

export default TextAreaDemo
