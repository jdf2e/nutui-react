import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const [date, setDate] = useState<string[]>(['2025-06-03', '2025-06-16'])

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const yearMonthChange = (param: string) => {
    console.log(param)
  }

  return (
    <>
      <div
        className="test-calendar-wrapper"
        style={{
          display: 'flex',
          width: '100%',
          height: '350px',
          overflow: 'hidden',
        }}
      >
        <Calendar
          popup={false}
          defaultValue={date}
          type="range"
          startDate="2025-02-23"
          endDate="2025-08-01"
          startText={<div>test</div>}
          endText="leave"
          autoBackfill
          onConfirm={setChooseValue}
          onPageChange={yearMonthChange}
        />
      </div>
    </>
  )
}
export default Demo11
