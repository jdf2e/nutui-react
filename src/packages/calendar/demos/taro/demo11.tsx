import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react-taro'

export type CalendarParam = string[] | string[][]
const Demo11 = () => {
  const [date, setDate] = useState<string[]>(['2023-06-03', '2023-06-16'])

  const onConfirm = (param: CalendarParam) => {
    console.log('onConfirm', param)
    setDate([param[0][3], param[1][3]])
  }
  const onDayClick = (param: CalendarParam) => {
    console.log('onDayClick', param)
  }
  const yearMonthChange = (param: CalendarParam) => {
    console.log(param)
  }

  return (
    <>
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
          defaultValue={date}
          type="range"
          startDate="2023-05-23"
          endDate="2023-08-01"
          startText={<div>test</div>}
          endText="leave"
          autoBackfill
          onConfirm={onConfirm}
          onDayClick={onDayClick}
          onPageChange={yearMonthChange}
        />
      </div>
    </>
  )
}
export default Demo11
