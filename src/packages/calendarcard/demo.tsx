import React, { useState } from 'react'
import CalendarCard from '../calendarcard'
import { useTranslate } from '../../sites/assets/locale'
import { CalendarValue } from './calendarcard'
import Cell from '@/packages/cell'
import Popup from '@/packages/popup'
import Button from '@/packages/button'

interface T {
  single: string
  multiple: string
  range: string
  week: string
  control: string
  firstDay: string
  customRange: string
  disable: string
  popup: string
  select: string
  confirm: string
}

const CalendarDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      single: '选择单个日期',
      multiple: '选择多个日期',
      range: '选择范围',
      week: '选择周',
      control: '受控模式',
      firstDay: '自定义周起始日',
      customRange: '自定义选择范围',
      disable: '自定义禁止选择日期',
      popup: '与 Popup 组合使用',
      select: '选择日期',
      confirm: '确定',
    },
    'zh-TW': {
      single: '選擇單個日期',
      multiple: '選擇多個日期',
      range: '選擇範圍',
      week: '選擇周',
      control: '受控模式',
      firstDay: '自定義周起始日',
      customRange: '自定義選擇範圍',
      disable: '自定義禁止選擇日期',
      popup: '與 Popup 組合使用',
      select: '選擇日期',
      confirm: '確定',
    },
    'en-US': {
      single: 'Select a single date',
      multiple: 'Select multiple dates',
      range: 'Select a range',
      week: 'Select a week',
      control: 'Controlled mode',
      firstDay: 'Custom week start day',
      customRange: 'Custom selection range',
      disable: 'Custom prohibition date selection',
      popup: 'Use with Popup',
      select: 'Select',
      confirm: 'Confirm',
    },
  })
  const change = (d: CalendarValue) => {
    console.log(d)
  }
  const [val1, setVal1] = useState<Date | null>(() => {
    return null
  })
  const change1 = (v: any) => {
    console.log(v)
    setVal1(v)
  }
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState(null)
  return (
    <>
      <div className="demo">
        <h2>{translated.single}</h2>
        <CalendarCard defaultValue={new Date('2023-01-01')} onChange={change} />

        <h2>{translated.multiple}</h2>
        <CalendarCard
          type="multiple"
          defaultValue={[new Date('2023-01-01'), new Date('2023-01-03')]}
          onChange={change}
        />

        <h2>{translated.range}</h2>
        <CalendarCard type="range" onChange={change} />

        <h2>{translated.week}</h2>
        <CalendarCard type="week" onChange={change} />

        <h2>{translated.control}</h2>
        <CalendarCard value={val1} onChange={change1} />

        <h2>{translated.firstDay}</h2>
        <CalendarCard firstDayOfWeek={0} onChange={change} />

        <h2>{translated.customRange}</h2>
        <CalendarCard
          startDate={new Date('2023-08-01')}
          endDate={new Date('2025-11-11')}
          onChange={change}
        />

        <h2>{translated.disable}</h2>
        <CalendarCard
          disableDay={(day) => {
            const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay()
            return d === 1 || d === 3
          }}
          onChange={change}
        />

        <h2>{translated.popup}</h2>
        <Cell
          title={translated.select}
          description={String(date)}
          onClick={() => setVisible(true)}
        />
        <Popup
          title={translated.select}
          visible={visible}
          position="bottom"
          closeable
          onClose={() => setVisible(false)}
        >
          <CalendarCard value={date} onChange={(d: any) => setDate(d)} />
          <div
            style={{
              padding: '10px',
            }}
          >
            <Button block type="danger" onClick={() => setVisible(false)}>
              {translated.confirm}
            </Button>
          </div>
        </Popup>
      </div>
    </>
  )
}

export default CalendarDemo
