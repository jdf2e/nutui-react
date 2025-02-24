import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react'

const Demo3 = () => {
  const [date, setDate] = useState<string[]>([])

  const setChooseValue = (chooseData: any) => {
    const dateArr = chooseData.map((item: any) => {
      return item[3]
    })
    setDate([...dateArr])
  }

  return (
    <div
      className="test-calendar-wrapper"
      style={{
        display: 'flex',
        width: '100%',
        height: '550px',
        overflow: 'hidden',
      }}
    >
      <Calendar
        showMonthNumber
        popup={false}
        defaultValue={date}
        type="multiple"
        startDate="2023-12-01"
        endDate="2025-12-31"
        firstDayOfWeek={1}
        onConfirm={setChooseValue}
      />
    </div>
  )
}
export default Demo3
