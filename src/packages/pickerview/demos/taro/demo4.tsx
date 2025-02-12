import React, { useState } from 'react'
import { PickerView, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const listData = [
    [
      { value: 1, label: '南京市' },
      { value: 2, label: '无锡市' },
      { value: 3, label: '海北藏族自治区' },
      { value: 4, label: '北京市' },
      { value: 5, label: '连云港市' },
      { value: 8, label: '大庆市' },
      { value: 9, label: '绥化市' },
      { value: 10, label: '潍坊市' },
      { value: 12, label: '乌鲁木齐市' },
    ],
  ]

  const [value, setValue] = useState([2])

  return (
    <>
      <Cell>
        <PickerView
          value={value}
          options={listData}
          onChange={({ value, selectedOptions }) => {
            console.log('onChange', value, selectedOptions)
            if (value[0] === 3) {
              setValue([1])
            }
          }}
        />
      </Cell>
    </>
  )
}
export default Demo4
