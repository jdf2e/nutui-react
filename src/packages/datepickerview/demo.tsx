import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'

const DatePickerViewDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '选择日期',
      mmdd: '选择月日',
    },
    'zh-TW': {
      basic: '選擇日期',
      mmdd: '選擇月日',
    },
    'en-US': {
      basic: 'Choose Date',
      mmdd: 'Choose Month-Day',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.mmdd}</h2>
        <Demo2 />
      </div>
    </>
  )
}
export default DatePickerViewDemo
