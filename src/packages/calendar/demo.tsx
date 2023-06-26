import React, { useState, useRef } from 'react'
import { Calendar } from './calendar'
import { Cell } from '@/packages/cell/cell'
import Utils from '@/utils/date'
import { useTranslate } from '../../sites/assets/locale'

import './demo.scss'

interface Day {
  day: string | number
  type: string
}

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  '7db1a8b2': string
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
      cfbdc781: '快捷选择',
      c3a3a1d2: '选择日期',
      e51e4582: '平铺展示',
      '7db1a8b2': '选择多个日期',
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
      cfbdc781: '快捷選擇',
      c3a3a1d2: '選擇日期',
      e51e4582: '平鋪展示',
      '7db1a8b2': '選擇多個日期',
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
      cfbdc781: 'quick selection',
      c3a3a1d2: 'select date',
      e51e4582: 'Tiled display',
      '7db1a8b2': 'select multiple dates',
      a52bef0c: 'chosen',
      d04fcbda: 'custom calendar',
      '0aaad620': 'custom button',
      '60a53514': 'Custom time copy',
      '781b07fd': 'Go Date',
      '1076d771': 'Last Seven Days',
      '6ab47cd2': 'This Month',
    },
  })
  const d = new Date()
  const currDay = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  const [date, setDate] = useState(currDay)
  const [date1, setDate1] = useState(['2023-01-23', '2023-11-26'])
  const [date2, setDate2] = useState('2023-05-08')
  const [date3, setDate3] = useState('')
  const [date4, setDate4] = useState<string[]>([])
  const [date5, setDate5] = useState<string[]>(['2023-03-23', '2023-11-26'])
  const [date6, setDate6] = useState<string[]>(['2023-06-12', '2023-06-16'])
  const [date7, setDate7] = useState<string[]>(['2023-07-10', '2023-07-19'])
  const [date8, setDate8] = useState<string[]>(['2023-06-03', '2023-06-16'])
  const [dateWeek, setDateWeek] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  const [isVisible5, setIsVisible5] = useState(false)
  const [isVisible6, setIsVisible6] = useState(false)
  const [isVisible7, setIsVisible7] = useState(false)

  const calendarRef = useRef<any>(null)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const openSwitch1 = () => {
    setIsVisible1(true)
  }

  const openSwitch3 = () => {
    setIsVisible3(true)
  }

  const openSwitch4 = () => {
    setIsVisible4(true)
  }

  const openSwitch5 = () => {
    setIsVisible5(true)
  }

  const openSwitch6 = () => {
    setIsVisible6(true)
  }

  const openSwitch7 = () => {
    setIsVisible7(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const closeSwitch1 = () => {
    setIsVisible1(false)
  }

  const closeSwitch3 = () => {
    setIsVisible3(false)
  }

  const closeSwitch4 = () => {
    setIsVisible4(false)
  }

  const closeSwitch5 = () => {
    setIsVisible5(false)
  }

  const closeSwitch6 = () => {
    setIsVisible6(false)
  }

  const closeSwitch7 = () => {
    setIsVisible7(false)
  }

  const setChooseValue = (param: string) => {
    console.log('setChooseValue', param)
    setDate(param[3])
    setDateWeek(param[4])
  }

  const setChooseValue1 = (param: string) => {
    console.log('setChooseValue1', [...[param[0][3], param[1][3]]])
    setDate1([...[param[0][3], param[1][3]]])
  }

  const setChooseValue2 = (param: string) => {
    setDate2(param[3])
    console.log('setChooseValue2', param[3])
  }

  const setChooseValue3 = (param: string) => {
    setDate3(param[3])
    console.log('setChooseValue3', param[3])
  }

  const setChooseValue4 = (chooseData: any) => {
    const dateArr = chooseData.map((item: any) => {
      return item[3]
    })
    console.log('setChooseValue4', [...dateArr], chooseData)
    setDate4([...dateArr])
  }

  const setChooseValue5 = (param: string) => {
    console.log('set value 5', [...[param[0][3], param[1][3]]])
    setDate5([...[param[0][3], param[1][3]]])
  }

  const setChooseValue6 = (param: string) => {
    setDate6([...[param[0][3], param[1][3]]])
  }

  const setChooseValue7 = (param: string) => {
    setDate7([...[param[0][3], param[1][3]]])
  }

  const setChooseValue8 = (param: string) => {
    setDate8([...[param[0][3], param[1][3]]])
  }

  const select = (param: string) => {
    console.log(param)
  }

  const yearMonthChange = (param: string) => {
    console.log(param)
  }

  const goDate = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollToDate('2023-04-01')
    }
  }

  const clickBtn = () => {
    const date = [Utils.date2Str(new Date()), Utils.getDay(6)]
    setDate7(date)
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(date[0])
    }
  }

  const clickBtn1 = () => {
    const date = new Date()
    const year = date.getFullYear()
    let month: any = date.getMonth() + 1
    month = month < 10 ? `0${month}` : `${month}`
    const yearMonth = `${year}-${month}`
    const currMonthDays = Utils.getMonthDays(`${year}`, `${month}`)
    setDate7([`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`])
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(`${yearMonth}-01`)
    }
  }

  const renderDay = (date: Day) => {
    return <>{date.day <= 9 ? `0${date.day}` : date.day}</>
  }
  const renderDayTop = (date: Day) => {
    let currDate = ''
    if (date && date.day === 10) {
      currDate = '☺'
    }
    return <span className="info">{currDate}</span>
  }

  const renderDayBottom = (date: Day) => {
    let currDate = ''
    if (date && date.day === 10) {
      currDate = '纪念日'
    }
    return <span className="info">{currDate}</span>
  }

  const renderHeaderButtons = () => {
    return (
      <div className="wrapper">
        <div className="d_div">
          <span className="d_btn" onClick={goDate}>
            {translated['781b07fd']}
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn}>
            {translated['1076d771']}
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn1}>
            {translated['6ab47cd2']}
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Cell
          title={translated.c38a08ef}
          description={date ? `${date} ${dateWeek}` : translated.b840c88f}
          onClick={openSwitch}
        />
        <Calendar
          visible={isVisible}
          showTitle={false}
          defaultValue={date}
          // startDate="2023-06-11"
          endDate="2023-11-30"
          onClose={closeSwitch}
          onConfirm={setChooseValue}
          onClickDay={select}
        />

        <Cell
          title={translated.a74a1fd4}
          description={
            date1
              ? `${date1[0]}${translated['8dab2f66']}${date1[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch1}
        />
        <Calendar
          visible={isVisible1}
          defaultValue={date1}
          type="range"
          startDate="2022-12-22"
          endDate="2024-01-08"
          onClose={closeSwitch1}
          onConfirm={setChooseValue1}
          onClickDay={select}
        />

        <Cell
          title={translated['7db1a8b2']}
          description={
            date4 && date4.length
              ? `${translated.a52bef0c}${date4.length}`
              : translated.b840c88f
          }
          onClick={openSwitch4}
        />
        <Calendar
          visible={isVisible4}
          defaultValue={date4}
          type="multiple"
          startDate="2023-01-01"
          endDate="2024-09-10"
          onClose={closeSwitch4}
          onConfirm={setChooseValue4}
        />

        <h2>{translated.cfbdc781}</h2>
        <Cell
          title={translated.c3a3a1d2}
          description={date3 ? `${date3}` : translated.b840c88f}
          onClick={openSwitch3}
        />
        <Calendar
          visible={isVisible3}
          defaultValue={date3}
          startDate=""
          endDate=""
          autoBackfill
          onClose={closeSwitch3}
          onConfirm={setChooseValue3}
        />
        <Cell
          title={translated.a74a1fd4}
          description={
            date1
              ? `${date5[0]}${translated['8dab2f66']}${date5[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch5}
        />
        <Calendar
          visible={isVisible5}
          defaultValue={date5}
          type="range"
          autoBackfill
          startDate="2022-12-22"
          endDate="2024-01-08"
          onClose={closeSwitch5}
          onConfirm={setChooseValue5}
          onClickDay={select}
        />
        <h2>{translated.d04fcbda}</h2>
        <Cell
          title={translated['60a53514']}
          description={
            date6
              ? `${date6[0]}${translated['8dab2f66']}${date6[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch6}
        />
        <Calendar
          visible={isVisible6}
          defaultValue={date6}
          type="range"
          startDate="2023-2-22"
          endDate="2024-01-08"
          confirmText="submit"
          startText="enter"
          endText="leave"
          renderDay={renderDay}
          renderDayTop={renderDayTop}
          renderDayBottom={renderDayBottom}
          showToday
          onClose={closeSwitch6}
          onConfirm={setChooseValue6}
        />

        <Cell
          title={translated['0aaad620']}
          description={
            date7
              ? `${date7[0]}${translated['8dab2f66']}${date7[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch7}
        />
        <Calendar
          ref={calendarRef}
          visible={isVisible7}
          defaultValue={date7}
          type="range"
          startDate="2022-12-22"
          endDate="2024-12-31"
          renderHeaderButtons={renderHeaderButtons}
          onClose={closeSwitch7}
          onConfirm={setChooseValue7}
        />

        <h2>{translated.e51e4582}</h2>
        <div
          className="test-calendar-wrapper"
          style={{
            display: 'flex',
            width: '100%',
            height: '613px',
            overflow: 'hidden',
          }}
        >
          <Calendar
            popup={false}
            defaultValue={date8}
            type="range"
            startDate="2023-5-23"
            endDate="2023-08-01"
            startText={<div>test</div>}
            endText="leave"
            autoBackfill
            onConfirm={setChooseValue8}
            onPageChange={yearMonthChange}
          />
        </div>
      </div>
    </>
  )
}

export default CalendarDemo
