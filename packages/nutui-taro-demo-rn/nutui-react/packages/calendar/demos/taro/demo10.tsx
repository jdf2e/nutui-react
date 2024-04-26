import React, { useState, useRef } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

function isLeapYear(y: number): boolean {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
}

function getMonthDays(year: string, month: string): number {
  if (/^0/.test(month)) {
    month = month.split('')[1]
  }
  return (
    [
      0,
      31,
      isLeapYear(Number(month)) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ] as number[]
  )[month as any]
}

const padZero = (num: number | string, targetLength = 2) => {
  let str = `${num}`
  while (str.length < targetLength) {
    str = `0${str}`
  }
  return str
}

function date2Str(date: Date, split?: string): string {
  split = split || '-'
  const y = date.getFullYear()
  const m = padZero(date.getMonth() + 1)
  const d = padZero(date.getDate())
  return [y, m, d].join(split)
}

function getDay(i: number): string {
  i = i || 0
  let date = new Date()
  const diff = i * (1000 * 60 * 60 * 24)
  date = new Date(date.getTime() + diff)
  return date2Str(date)
}

const Demo10 = () => {
  const [date, setDate] = useState<string[]>(['2023-07-10', '2023-07-19'])

  const [isVisible, setIsVisible] = useState(false)

  const calendarRef = useRef<any>(null)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const goDate = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollToDate('2023-04-01')
    }
  }

  const clickBtn = () => {
    const date = [date2Str(new Date()), getDay(6)]
    setDate(date)
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
    const currMonthDays = getMonthDays(`${year}`, `${month}`)
    setDate([`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`])
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(`${yearMonth}-01`)
    }
  }

  const renderHeaderButtons = () => {
    return (
      <div className="wrapper">
        <div className="d_div">
          <span className="d_btn" onClick={goDate}>
            去某个月
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn}>
            最近七天
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn1}>
            当月
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Cell
        title="自定义按钮"
        description={date ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        ref={calendarRef}
        visible={isVisible}
        defaultValue={date}
        type="range"
        startDate="2022-12-22"
        endDate="2024-12-31"
        renderHeaderButtons={renderHeaderButtons}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo10
