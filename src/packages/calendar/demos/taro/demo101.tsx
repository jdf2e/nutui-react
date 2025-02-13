import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const d = new Date()
  const currDay = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  const [date, setDate] = useState(currDay)

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
        viewMode="quarter"
        showTitle={false}
        defaultValue={date}
        startDate="2023-09-12"
        endDate="2028-09-19"
        onItemClick={select}
      />
    </div>
  )
}
export default Demo1
