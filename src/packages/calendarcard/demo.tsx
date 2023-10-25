import React, { useState } from 'react'
import CalendarCard from '../calendarcard'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  '8dab2f67': string
  '8dab2f68': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  '7db1a8b2': string
  '7db1a8b3': string
  '7db1a8b4': string
  '7db1a8b5': string
  a52bef0c: string
  d04fcbda: string
  '0aaad620': string
  '60a53514': string
  '781b07fd': string
  '1076d771': string
  '6ab47cd2': string
}

const CalendarDemo = () => {
  const [translated] = useTranslate<T>({
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
  const output = (a: any) => {
    console.log(a)
  }
  const [val1, setVal1] = useState<Date | null>(() => {
    return null
  })
  const change1 = (v: any) => {
    console.log('受控', v)
    setVal1(v)
  }
  const [val2, setVal2] = useState<Date[]>(() => {
    return [new Date('2022-09-23'), new Date('2022-09-29')]
  })
  const change2 = (v: any) => {
    console.log('受控', v)
    setVal2(v)
  }
  return (
    <>
      <div className="demo">
        <h2>日视图-选择单个日期-无默认值</h2>
        <CalendarCard
          onChange={output}
          startDate={new Date('2023-08-01')}
          endDate={new Date('2023-11-11')}
        />

        <h2>日视图-选择单个日期-有默认值</h2>
        <CalendarCard defaultValue={new Date('2022-09-23')} onChange={output} />

        <h2>日视图-选择单个日期-受控模式</h2>
        <CalendarCard value={val1} onChange={change1} />

        <h2>日视图-选择多个日期-无默认值</h2>
        <CalendarCard
          type="multiple"
          onChange={output}
          // disableDay={(day) => {
          //   const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay()
          //   return d === 1 || d === 3
          // }}
          startDate={new Date('2023-08-01')}
          endDate={new Date('2023-11-11')}
        />

        <h2>日视图-选择多个日期-有默认值</h2>
        <CalendarCard
          type="multiple"
          defaultValue={[new Date('2022-10-26'), new Date('2023-10-23')]}
          onChange={output}
        />

        <h2>日视图-选择多个日期-受控模式</h2>
        <CalendarCard type="multiple" value={val2} onChange={change2} />

        <h2>日视图-选择范围-无默认值</h2>
        <CalendarCard
          type="range"
          onChange={output}
          // disableDay={(day) => {
          //   const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay()
          //   return d === 1 || d === 3
          // }}
          startDate={new Date('2023-08-01')}
          endDate={new Date('2023-11-11')}
        />

        <h2>日视图-选择范围-有默认值</h2>
        <CalendarCard
          type="range"
          defaultValue={[new Date('2022-10-23'), new Date('2022-10-26')]}
          onChange={output}
        />

        <h2>日视图-选择范围-受控模式</h2>
        <CalendarCard type="range" value={val2} onChange={change2} />

        <h2>日视图-设置周日为周起始日</h2>
        <CalendarCard firstDayOfWeek={0} onChange={output} />

        <h2>周视图-无默认值</h2>
        <CalendarCard
          type="week"
          onChange={output}
          // disableDay={(day) => {
          //   const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay()
          //   return d === 1 || d === 3
          // }}
          startDate={new Date('2023-08-01')}
          endDate={new Date('2023-11-11')}
        />

        <h2>周视图-有默认值</h2>
        <CalendarCard
          type="week"
          defaultValue={[new Date('2022-10-17'), new Date('2022-10-23')]}
          onChange={output}
        />

        <h2>周视图-设置周日为周起始日</h2>
        <CalendarCard type="week" firstDayOfWeek={1} onChange={output} />
      </div>
    </>
  )
}

export default CalendarDemo
