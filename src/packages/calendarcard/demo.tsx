import React, { useRef, useState } from 'react'
import CalendarCard from '../calendarcard'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'
import Popup from '@/packages/popup'
import Button from '@/packages/button'
import Space from '@/packages/space'
import Tag from '@/packages/tag'
import { CalendarCardDay, CalendarCardValue } from './types'

interface T {
  single: string
  multiple: string
  range: string
  week: string
  control: string
  renderDay: string
  firstDay: string
  customRange: string
  disable: string
  popup: string
  select: string
  confirm: string
  ref: string
}

const CalendarDemo = () => {
  const [translated] = useTranslate<T>({
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
  const change = (d: CalendarCardValue) => {
    console.log(d)
  }
  const [val1, setVal1] = useState<Date | null>(() => {
    return null
  })
  const [val2, setVal2] = useState(() => {
    return [new Date('2023-01-01'), new Date('2023-01-03')]
  })
  const change1 = (v: any) => {
    console.log(v)
    setVal1(v)
  }
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState(null)

  const CalendarCardRef = useRef<any>(null)

  const renderDayTop = (day: CalendarCardDay) => {
    return day.date === 8 ? '☺' : ''
  }

  const renderDay = (day: CalendarCardDay) => {
    return day.date <= 9 ? `0${day.date}` : day.date
  }

  const renderDayBottom = (day: CalendarCardDay) => {
    return day.date === 8 ? '节日' : ''
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.single}</h2>
        <CalendarCard defaultValue={new Date('2023-01-01')} onChange={change} />

        <h2>{translated.multiple}</h2>
        <Space wrap>
          {val2.map((d) => {
            return (
              <Tag key={d.getTime()} type="info">
                {`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`}
              </Tag>
            )
          })}
        </Space>
        <CalendarCard
          type="multiple"
          value={val2}
          onChange={(v: any) => setVal2(v)}
        />

        <h2>{translated.range}</h2>
        <CalendarCard type="range" onChange={change} />

        <h2>{translated.week}</h2>
        <CalendarCard type="week" onChange={change} />

        <h2>{translated.control}</h2>
        <CalendarCard value={val1} onChange={change1} />

        <h2>{translated.renderDay}</h2>
        <CalendarCard
          renderDayTop={renderDayTop}
          renderDay={renderDay}
          renderDayBottom={renderDayBottom}
        />

        <h2>{translated.firstDay}</h2>
        <CalendarCard firstDayOfWeek={1} onChange={change} />

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

        <h2>{translated.ref}</h2>
        <Space style={{ marginBottom: '10px' }}>
          <Button onClick={() => CalendarCardRef.current?.jump(1)}>+ 1</Button>
          <Button onClick={() => CalendarCardRef.current?.jump(12)}>
            + 12
          </Button>
          <Button onClick={() => CalendarCardRef.current?.jump(-12)}>
            - 12
          </Button>
          <Button onClick={() => CalendarCardRef.current?.jumpTo(2023, 1)}>
            2023 01
          </Button>
        </Space>
        <CalendarCard ref={CalendarCardRef} />
      </div>
    </>
  )
}

export default CalendarDemo
