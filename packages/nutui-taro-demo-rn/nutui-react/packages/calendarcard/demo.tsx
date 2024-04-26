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
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'
import Demo11 from './demos/h5/demo11'

const CalendarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      single: '选择单个日期',
      multiple: '选择多个日期',
      range: '选择范围',
      week: '选择周',
      control: '受控模式',
      renderDay: '自定义日期信息',
      firstDay: '自定义周起始日',
      customRange: '自定义选择范围',
      disable: '自定义禁止选择日期',
      popup: '与 Popup 组合使用',
      select: '选择日期',
      confirm: '确定',
      ref: '使用 Ref 上的方法',
    },
    'zh-TW': {
      single: '選擇單個日期',
      multiple: '選擇多個日期',
      range: '選擇範圍',
      week: '選擇周',
      control: '受控模式',
      renderDay: '自定义日期信息',
      firstDay: '自定義周起始日',
      customRange: '自定義選擇範圍',
      disable: '自定義禁止選擇日期',
      popup: '與 Popup 組合使用',
      select: '選擇日期',
      confirm: '確定',
      ref: '使用 Ref 上的方法',
    },
    'en-US': {
      single: 'Select a single date',
      multiple: 'Select multiple dates',
      range: 'Select a range',
      week: 'Select a week',
      control: 'Controlled mode',
      renderDay: 'Custom day information',
      firstDay: 'Custom week start day',
      customRange: 'Custom selection range',
      disable: 'Custom prohibition date selection',
      popup: 'Use with Popup',
      select: 'Select',
      confirm: 'Confirm',
      ref: 'Use ref',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.single}</h2>
        <Demo1 />

        <h2>{translated.multiple}</h2>
        <Demo2 />

        <h2>{translated.range}</h2>
        <Demo3 />

        <h2>{translated.week}</h2>
        <Demo4 />

        <h2>{translated.control}</h2>
        <Demo5 />

        <h2>{translated.renderDay}</h2>
        <Demo6 />

        <h2>{translated.firstDay}</h2>
        <Demo7 />

        <h2>{translated.customRange}</h2>
        <Demo8 />

        <h2>{translated.disable}</h2>
        <Demo9 />

        <h2>{translated.popup}</h2>
        <Demo10 />

        <h2>{translated.ref}</h2>
        <Demo11 />
      </div>
    </>
  )
}

export default CalendarDemo
