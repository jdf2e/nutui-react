import React, { useState } from 'react'
import {
  Picker,
  Cell,
  PickerOptions,
  PickerValue,
} from '@nutui/nutui-react-taro'
import isEqual from 'react-fast-compare'
import { PickerOnChangeCallbackParameter } from '@/packages/pickerview/types'

const Demo3 = () => {
  const [visible, setVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const [value, setValue] = useState<PickerValue[]>([] as PickerValue[])
  const options = [
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

  const changePicker = ({
    value,
    index,
    selectedOptions,
  }: PickerOnChangeCallbackParameter) => {
    console.log('changePicker', value, index, selectedOptions)
  }
  const confirmPicker = (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => {
    if (isEqual(selectedValue, [3])) {
      setValue([1])
      setBaseDesc('南京市')
    } else {
      setValue(selectedValue)
      let description = ''
      selectedOptions.forEach((option: any) => {
        description += ` ${option.label}`
      })
      setBaseDesc(description)
    }
  }
  return (
    <>
      <Cell
        title="请选择城市"
        description={baseDesc}
        onClick={() => setVisible(!visible)}
      />
      <Picker
        title="请选择城市"
        visible={visible}
        value={value}
        options={options}
        onChange={changePicker}
        onConfirm={confirmPicker}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo3
