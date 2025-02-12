import React from 'react'
import { PickerView, Cell } from '@nutui/nutui-react'

const Demo5 = () => {
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

  return (
    <>
      <Cell>
        <PickerView
          defaultValue={[1]}
          options={listData}
          threeDimensional={false}
          duration={500}
          onChange={({ value, selectedOptions }) => {
            console.log('onChange', value, selectedOptions)
          }}
        />
      </Cell>
    </>
  )
}
export default Demo5
