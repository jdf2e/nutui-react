import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react'

const Demo = () => {
  const d = new Date().getFullYear()
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
        startDate={`${d - 2}-09-12`}
        endDate={`${d + 2}-09-12`}
        firstDayOfWeek={1}
        onConfirm={setChooseValue}
      />
    </div>
  )
}
export default Demo
