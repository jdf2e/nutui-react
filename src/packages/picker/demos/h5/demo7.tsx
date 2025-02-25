import React, { useState } from 'react'
import {
  Picker,
  Cell,
  PickerOptions,
  PickerValue,
  PickerOnChangeCallbackParameter,
  PickerOption,
} from '@nutui/nutui-react'

const Demo7 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [value, setValue] = useState<PickerValue[]>([1])
  const [asyncDesc, setasyncDesc] = useState('北京')
  const [asyncData, setAsyncData] = useState([
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
        children: [],
      },
    ],
  ])
  const updateChooseValueCustmer = ({
    value,
    index,
    selectedOptions,
  }: PickerOnChangeCallbackParameter) => {
    if (value[0] === 2 && asyncData[0]?.[1].children.length === 0) {
      console.log('updateChooseValueCustmer', index, value, selectedOptions)
      setTimeout(() => {
        asyncData[0][1].children = [
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
        setAsyncData([...[...asyncData]])
      }, 0)
    }
  }
  const setAsyncConfirm = (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => {
    console.log('onconfirm', selectedOptions, selectedValue)
    const city = selectedOptions
      .map((item: PickerOption) => item.label)
      .join('-')
    setasyncDesc(city)
    setValue(selectedValue)
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
        value={value}
        onClose={() => setIsVisible(false)}
        onConfirm={setAsyncConfirm}
        onChange={updateChooseValueCustmer}
      />
    </>
  )
}
export default Demo7
