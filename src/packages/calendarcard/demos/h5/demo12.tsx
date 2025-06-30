import React, { useRef, useState } from 'react'
import { CalendarCard, CalendarCardRef } from '@nutui/nutui-react'

const date = new Date('2025-01-01')

const Demo1 = () => {
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
      title={
        <div onClick={() => CalendarCardRef.current?.jump(-1)}>
          自定义头，当前2025-01-01，展示月份-1：{dateStr}
        </div>
      }
    />
  )
}
export default Demo1
