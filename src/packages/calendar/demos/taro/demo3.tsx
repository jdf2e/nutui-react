import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

export type CalendarParam = string[] | string[][]
const Demo3 = () => {
  const [date, setDate] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }
  const onDayClick = (param: CalendarParam) => {
    console.log('onDayClick', param)
  }
  const onConfirm = (data: CalendarParam) => {
    console.log('onconfirm', data)
    const dateArr = data.map((item: any) => {
      return item[3]
    })
    setDate([...dateArr])
  }

  return (
    <>
      <Cell
        title="选择多个日期"
        description={date && date.length ? `已选择${date.length}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        onDayClick={onDayClick}
        visible={isVisible}
        defaultValue={date}
        type="multiple"
        startDate="2023-01-01"
        endDate="2024-09-10"
        onClose={closeSwitch}
        onConfirm={onConfirm}
      />
    </>
  )
}
export default Demo3
