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

const DatePickerDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '选择日期',
      mmdd: '选择月日',
      showAll: '选择年月日时分',
      time: '选择时分秒',
      hourMinutes: '选择时分',
      format: '格式化选项',
      stepMins: '分钟数递增步长设置',
      filter: '过滤选项',
    },
    'zh-TW': {
      basic: '選擇日期',
      mmdd: '選擇月日',
      showAll: '選擇年月日時分',
      time: '選擇時分秒',
      hourMinutes: '選擇時分',
      format: '格式化选项',
      stepMins: '分鐘數遞增步長設置',
      filter: '過濾選項',
    },
    'en-US': {
      basic: 'Choose Date',
      mmdd: 'Choose Month-Day',
      showAll: 'Choose DateTime',
      time: 'Choose Time',
      hourMinutes: 'Selective time',
      format: 'Option Formatter',
      stepMins: 'Option Steps',
      filter: 'Option Filter',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.mmdd}</h2>
        <Demo2 />
        <h2>{translated.showAll}</h2>
        <Demo3 />
        <h2>{translated.time}</h2>
        <Demo4 />
        <h2>{translated.hourMinutes}</h2>
        <Demo5 />
        <h2>{translated.format}</h2>
        <Demo6 />
        <h2>{translated.stepMins}</h2>
        <Demo7 />
        <h2>{translated.filter}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default DatePickerDemo
