import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react'

const Demo2 = () => {
  const [date, setDate] = useState(['2025-01-23', '2025-03-26'])

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const select = (param: string) => {
    console.log(param)
  }

  return (
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
        viewMode="month"
        showTitle={false}
        defaultValue={date}
        startDate="2023-09-12"
        endDate="2027-10-19"
        onConfirm={setChooseValue}
        onDayClick={select}
      />
    </div>
  )
}
export default Demo2
