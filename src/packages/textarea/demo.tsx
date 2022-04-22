import React, { useEffect, useState } from 'react'
import { TextArea } from './textarea'
import { useTranslate } from '../../sites/assets/locale'

const TextAreaDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      numbers: '显示字数统计',
      autoHeight: '高度自定义，拉伸',
      readOnly: '只读',
      readOnlyState: '只读状态',
      disabled: '禁用',
      disabledState: '禁用状态',
    },
    'zh-TW': {
      basic: '基礎用法',
      numbers: '顯示數字統計',
      autoHeight: '高度自定義，拉伸',
      readOnly: '只讀',
      readOnlyState: '只讀狀態',
      disabled: '禁用',
      disabledState: '禁用狀態',
    },
  })

  const [value1, updateValue1] = useState('')
  const [value2] = useState('')
  const [value3] = useState('')

  useEffect(() => {
    updateValue1(translated.basic)
  }, [translated])

  const change = (value: any, event: Event) => {
    updateValue1(value)
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <TextArea
          defaultValue={value1}
          className="text-1"
          style={{ fontSize: '12px' }}
          change={(value, event) => {
            change(value, event)
          }}
          blur={() => {
            console.log('blur')
          }}
          focus={() => {
            console.log('focus')
          }}
        />
        <h2>{translated.numbers}</h2>
        <TextArea defaultValue={value2} limitshow maxlength="20" />
        <h2>{translated.autoHeight}</h2>
        <TextArea defaultValue={value3} rows="10" autosize />
        <h2>{translated.readOnly}</h2>
        <TextArea readonly defaultValue={`textarea${translated.readOnlyState}`} />
        <h2>{translated.disabled}</h2>
        <TextArea
          disabled
          defaultValue={`textarea${translated.disabledState}`}
          limitshow
          maxlength="20"
        />
      </div>
    </>
  )
}

export default TextAreaDemo
