import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo = () => {
  const d = new Date().getFullYear()
  const [date, setDate] = useState(`${d + 1}-02`)

  const select = (param: string) => {
    console.log('select', param)
    setDate(param)
  }

  return (
    <View
      className="test-calendar-wrapper"
      style={{
        display: 'flex',
        width: '100%',
        height: 400,
        overflow: 'hidden',
      }}
    >
      <Calendar
        viewMode="month"
        showTitle={false}
        value={date}
        defaultValue={date}
        startDate={`${d - 2}-09-12`}
        endDate={`${d + 2}-09-12`}
        onItemClick={select}
      />
    </View>
  )
}
export default Demo
