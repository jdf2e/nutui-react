import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react'

const Demo1 = () => {
  const d = new Date()
  const [date, setDate] = useState('2026-Q2')

  const select = (param: string) => {
    console.log('select quarter', param)
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
        viewMode="quarter"
        showTitle={false}
        value={date}
        defaultValue={date}
        startDate="2023-09-12"
        endDate="2028-09-19"
        onItemClick={select}
      />
    </div>
  )
}
export default Demo1
