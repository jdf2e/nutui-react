import React, { useState } from 'react'
import {
  Picker,
  Cell,
  PickerOptions,
  PickerValue,
} from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [visible, setVisible] = useState(false)
  const [mutilDesc, setMutilDesc] = useState('周三')
  const [defaultValue] = useState(['Wednesday'])
  const options = [
    // 第一列
    [
      { label: '周一', value: 'Monday' },
      { label: '周二', value: 'Tuesday' },
      { label: '周三', value: 'Wednesday' },
      { label: '周四', value: 'Thursday' },
      { label: '周五', value: 'Friday' },
    ],
    // 第二列
    [
      { label: '上午', value: 'Morning' },
      { label: '下午', value: 'Afternoon' },
      { label: '晚上', value: 'Evening' },
    ],
  ]
  const confirmPicker = (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => {
    console.log('confirmPicker', selectedOptions)
    let description = ''
    selectedOptions.forEach((option: any) => {
      option?.label && (description += ` ${option.label}`)
    })
    setMutilDesc(description)
  }
  return (
    <>
      <Cell
        title="多列用法"
        description={mutilDesc}
        onClick={() => setVisible(!visible)}
      />
      <Picker
        visible={visible}
        options={options}
        onClose={() => setVisible(false)}
        defaultValue={defaultValue}
        onConfirm={confirmPicker}
      />
    </>
  )
}
export default Demo4
