import React, { useRef, useState } from 'react'
import { CalendarCard, CalendarCardRef } from '@nutui/nutui-react-taro'

const date = new Date('2025-01-01')

const Demo14 = () => {
  const [dateStr, setDate] = useState(date.getMonth())
  const onPageChange = (val: any) => {
    console.log('onPageChange', val)
    setDate(val.month)
  }
  const CalendarCardRef = useRef<CalendarCardRef>(null)

  return (
    <CalendarCard
      ref={CalendarCardRef}
      defaultValue={date}
      onPageChange={onPageChange}
      renderDayAriaLabel={(day) => {
        return `自定义无障碍朗读：${day.year}年${day.month}月${day.date}日`
      }}
    />
  )
}
export default Demo14
