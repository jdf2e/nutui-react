import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const [date8, setDate8] = useState<string[]>(['2023-06-03', '2023-06-16'])

  const setChooseValue8 = (param: string) => {
    setDate8([...[param[0][3], param[1][3]]])
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
    </>
  )
}
export default Demo11
