import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [date, setDate] = useState('2025-02')

  const select = (param: string) => {
    console.log('select', param)
    setDate(param)
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
        value={date}
        defaultValue={date}
        startDate="2023-09-12"
        endDate="2027-10-19"
        onItemClick={select}
      />
    </div>
  )
}
export default Demo2
