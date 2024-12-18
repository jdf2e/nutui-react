import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import './demo.scss'
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
      ce5c5446: '基础用法',
      c38a08ef: '选择单个日期',
      b840c88f: '请选择',
      a74a1fd4: '选择日期区间',
      cfbdc781: '快捷选择',
      c3a3a1d2: '选择日期',
      e51e4582: '平铺展示',
      a52bef0c: '已选择',
      d04fcbda: '自定义日历',
    },
    'zh-TW': {
      ce5c5446: '基礎翻譯',
      c38a08ef: '選擇日期',
      b840c88f: '請選擇',
      a74a1fd4: '選擇日期區間',
      cfbdc781: '快捷選擇',
      c3a3a1d2: '選擇日期',
      e51e4582: '平鋪展示',
      a52bef0c: '已選擇',
      d04fcbda: '自定義日曆',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'select a single date',
      b840c88f: 'please choose',
      a74a1fd4: 'Select date range',
      cfbdc781: 'quick selection',
      c3a3a1d2: 'select date',
      e51e4582: 'Tiled display',
      a52bef0c: 'chosen',
      d04fcbda: 'custom calendar',
    },
  })

  return (
    <div className="demo">
      <h2>{translated.ce5c5446}</h2>
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
      <Demo5 />
      <Demo6 />
      <h2>{translated.cfbdc781}</h2>
      <Demo7 />
      <Demo8 />
      <h2>{translated.d04fcbda}</h2>
      <Demo9 />
      <Demo10 />
      <h2>{translated.e51e4582}</h2>
      <Demo11 />
    </div>
  )
}

export default CalendarDemo
