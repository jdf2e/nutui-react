import React from 'react'
import { PickerView, Cell } from '@nutui/nutui-react'

const Demo6 = () => {
  const listData = [
    [
      {
        value: 1,
        label: '北京',
        children: [
          {
            value: 1,
            label: '朝阳区',
          },
          {
            value: 2,
            label: '海淀区',
          },
          {
            value: 3,
            label: '大兴区',
          },
          {
            value: 4,
            label: '东城区',
          },
          {
            value: 5,
            label: '西城区',
          },
          {
            value: 6,
            label: '丰台区',
          },
        ],
      },
      {
        value: 2,
        label: '上海',
        children: [
          {
            value: 1,
            label: '黄埔区',
          },
          {
            value: 2,
            label: '长宁区',
          },
          {
            value: 3,
            label: '普陀区',
          },
          {
            value: 4,
            label: '杨浦区',
          },
          {
            value: 5,
            label: '浦东新区',
          },
        ],
      },
    ],
  ]

  return (
    <>
      <Cell>
        <PickerView
          defaultValue={[1]}
          options={listData}
          onChange={({ value, selectedOptions }) => {
            console.log('onChange', value, selectedOptions)
          }}
        />
      </Cell>
    </>
  )
}
export default Demo6
