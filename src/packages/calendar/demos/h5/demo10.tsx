import React, { useState, useRef } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'
import { date2Str, getDateString } from '@/utils/date'

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

const Demo10 = () => {
  const [date, setDate] = useState<string[]>(['2024-07-10', '2024-07-19'])
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
      calendarRef.current.scrollToDate('2024-10-01')
    }
  }

  const clickBtn = () => {
    const date = [date2Str(new Date()), getDateString(6)]
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
            {/* {translated['781b07fd']} */}
            去某个月
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn}>
            {/* {translated['1076d771']} */}
            最近七天
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn1}>
            {/* {translated['6ab47cd2']} */}
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
        startDate="2023-12-22"
        renderHeaderButtons={renderHeaderButtons}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo10
