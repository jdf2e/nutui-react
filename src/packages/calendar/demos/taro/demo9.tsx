import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'
import { padZero } from '@/utils/pad-zero'

interface Day {
  day: string | number
  type: string
}

const Demo9 = () => {
  const [date6, setDate6] = useState<string[]>(['2023-06-12', '2023-06-16'])

  const [isVisible6, setIsVisible6] = useState(false)

  const openSwitch6 = () => {
    setIsVisible6(true)
  }

  const closeSwitch6 = () => {
    setIsVisible6(false)
  }

  const setChooseValue6 = (param: string) => {
    setDate6([...[param[0][3], param[1][3]]])
  }

  const renderDay = (date: Day) => {
    return <>{padZero(date.day)}</>
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

  return (
    <>
      <Cell
        title="自定义时间文案"
        description={date6 ? `${date6[0]}至${date6[1]}` : '请选择'}
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
    </>
  )
}
export default Demo9
