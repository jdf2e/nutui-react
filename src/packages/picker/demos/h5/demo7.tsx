import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react'

interface PickerOption {
  label: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo7 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [asyncDesc, setasyncDesc] = useState('')
  const [asyncData, setAsyncData] = useState([
    {
      value: 1,
      label: '北京市',
      children: [
        {
          value: 1,
          label: '朝阳区',
          children: [
            {
              value: 1,
              label: '常营',
            },
            {
              value: 2,
              label: '望京',
            },
          ],
        },
        { value: 2, label: '海淀区' },
        { value: 3, label: '大兴区' },
        { value: 4, label: '东城区' },
        { value: 5, label: '西城区' },
        { value: 6, label: '丰台区' },
      ],
    },
    {
      value: 2,
      label: '上海市',
      children: [],
    },
  ])
  const updateChooseValueCustmer = (
    options: PickerOption[],
    values: (string | number)[],
    columnIndex: number
  ) => {
    console.log('updateChooseValueCustmer', columnIndex, values, options)
    if (columnIndex === 0 && values[0] === 2) {
      setTimeout(() => {
        if (asyncData[1].children.length === 0) {
          asyncData[1].children = [
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
          ]
          setAsyncData([...asyncData])
        }
      }, 100)
    }
  }
  const setAsyncConfirm = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    const str = options.map((item) => item.text).join('-')
    setasyncDesc(str)
  }

  return (
    <>
      <Cell
        title="请选择城市"
        description={asyncDesc}
        onClick={() => setIsVisible(!isVisible)}
      />
      <Picker
        visible={isVisible}
        options={asyncData}
        onClose={() => setIsVisible(false)}
        onConfirm={(list, values) => setAsyncConfirm(list, values)}
        onChange={(
          selectedOptions: PickerOption[],
          selectedValue: (string | number)[],
          columnIndex: number
        ) =>
          updateChooseValueCustmer(selectedOptions, selectedValue, columnIndex)
        }
      />
    </>
  )
}
export default Demo7
