import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [date, setDate] = useState<string[]>(['2025-03-14'])

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
        startDate="2020-01-01"
        endDate="2035-09-10"
        firstDayOfWeek={1}
        onConfirm={setChooseValue}
      />
    </div>
  )
}
export default Demo3
