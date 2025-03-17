import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo = () => {
  const d = new Date().getFullYear()
  const [date, setDate] = useState<string[]>([`${d}-06-03`, `${d}-06-16`])

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const yearMonthChange = (param: string) => {
    console.log(param)
  }

  return (
    <>
      <View
        className="test-calendar-wrapper"
        style={{
          display: 'flex',
          width: '100%',
          height: '613px',
          overflow: 'hidden',
        }}
      >
        <Calendar
          popup={false}
          defaultValue={date}
          type="range"
          startDate={`${d - 1}-11-21`}
          endDate={`${d + 1}-09-10`}
          startText={<div>test</div>}
          endText="leave"
          autoBackfill
          onConfirm={setChooseValue}
          onPageChange={yearMonthChange}
        />
      </View>
    </>
  )
}
export default Demo
