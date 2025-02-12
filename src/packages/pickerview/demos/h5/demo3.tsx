import React, { useState } from 'react'
import { PickerView, Cell } from '@nutui/nutui-react'
import isEqual from 'react-fast-compare'

const Demo3 = () => {
  const listData = [
    [
      { label: '周一', value: 'Monday' },
      { label: '周二', value: 'Tuesday' },
      { label: '周三', value: 'Wednesday' },
      { label: '周四', value: 'Thursday' },
      { label: '周五', value: 'Friday' },
    ],
    [
      { label: '上午', value: 'Morning' },
      { label: '下午', value: 'Afternoon' },
      { label: '晚上', value: 'Evening' },
    ],
  ]
  const [value, setValue] = useState(['Tuesday', 'Evening'])

  return (
    <>
      <Cell>
        <PickerView
          value={value}
          options={listData}
          onChange={({ value, selectedOptions }) => {
            console.log('onChange', value, selectedOptions)
            if (isEqual(value, ['Tuesday', 'Afternoon'])) {
              setValue(['Monday', 'Evening'])
            }
          }}
        />
      </Cell>
    </>
  )
}
export default Demo3
