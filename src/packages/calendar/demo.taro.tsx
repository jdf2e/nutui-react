import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import './demo.scss'

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

const CalendarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '选择单个日期',
      b840c88f: '请选择',
      a74a1fd4: '选择日期区间',
      '8dab2f66': '至',
      '8dab2f67': '请选择起始时间',
      '8dab2f68': '请选择截止时间',
      cfbdc781: '快捷选择',
      c3a3a1d2: '选择日期',
      e51e4582: '平铺展示',
      '7db1a8b2': '选择多个日期',
      '7db1a8b3': '选择周',
      '7db1a8b4': '日期不可选',
      '7db1a8b5': '日期区间',
      a52bef0c: '已选择',
      d04fcbda: '自定义日历',
      '0aaad620': '自定义按钮',
      '60a53514': '自定义时间文案',
      '781b07fd': '去某个月',
      '1076d771': '最近七天',
      '6ab47cd2': '当月',
    },
    'zh-TW': {
      ce5c5446: '基礎翻譯',
      c38a08ef: '選擇日期',
      b840c88f: '請選擇',
      a74a1fd4: '選擇日期區間',
      '8dab2f66': '至',
      '8dab2f67': '请选择起始时间',
      '8dab2f68': '请选择截止时间',
      cfbdc781: '快捷選擇',
      c3a3a1d2: '選擇日期',
      e51e4582: '平鋪展示',
      '7db1a8b2': '選擇多個日期',
      '7db1a8b3': '選擇周',
      '7db1a8b4': '日期不可選',
      '7db1a8b5': '日期区间',
      a52bef0c: '已選擇',
      d04fcbda: '自定義日曆',
      '0aaad620': '自定義按鈕',
      '60a53514': '自定義時間文案',
      '781b07fd': '去某個月',
      '1076d771': '最近七天',
      '6ab47cd2': '當月',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'select a single date',
      b840c88f: 'please choose',
      a74a1fd4: 'Select date range',
      '8dab2f66': 'to',
      '8dab2f67': 'Select start Time',
      '8dab2f68': 'Select end time',
      cfbdc781: 'quick selection',
      c3a3a1d2: 'select date',
      e51e4582: 'Tiled display',
      '7db1a8b2': 'select multiple dates',
      '7db1a8b3': 'select week',
      '7db1a8b4': 'disable date',
      '7db1a8b5': 'date range',
      a52bef0c: 'chosen',
      d04fcbda: 'custom calendar',
      '0aaad620': 'custom button',
      '60a53514': 'Custom time copy',
      '781b07fd': 'Go Date',
      '1076d771': 'Last Seven Days',
      '6ab47cd2': 'This Month',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
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
    </>
  )
}

export default CalendarDemo
