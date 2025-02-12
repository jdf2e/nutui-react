import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react'

const Demo2 = () => {
  const [date, setDate] = useState([])

  const select = (param: string) => {
    console.log('select', param)
    // setDate(param.item)
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
        viewMode="month"
        showTitle={false}
        defaultValue={date}
        startDate="2023-09-12"
        endDate="2027-10-19"
        onItemClick={select}
      />
    </div>
  )
}
export default Demo2
