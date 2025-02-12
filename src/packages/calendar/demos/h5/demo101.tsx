import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react'

const Demo1 = () => {
  const d = new Date()
  const currDay = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  const [date, setDate] = useState(currDay)
  const [isVisible, setIsVisible] = useState(false)
  const [dateWeek, setDateWeek] = useState('')

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate(param[3])
    setDateWeek(param[4])
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
        viewMode="quarter"
        showTitle={false}
        defaultValue={date}
        startDate="2023-09-12"
        endDate="2028-09-19"
        onClose={closeSwitch}
        onConfirm={setChooseValue}
        onDayClick={select}
      />
    </div>
  )
}
export default Demo1
