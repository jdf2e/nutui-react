import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  label: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo4 = () => {
  const [isVisible2, setIsVisible2] = useState(false)
  const [mutilDesc, setMutilDesc] = useState('')
  const listData2 = [
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
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    setMutilDesc(description)
  }
  const changePicker = (options: any[], values: any, columnIndex: number) => {
    console.log('picker onChange', columnIndex, values, options)
  }
  return (
    <>
      <Cell
        title="多列用法"
        description={mutilDesc}
        onClick={() => setIsVisible2(!isVisible2)}
      />
      <Picker
        visible={isVisible2}
        options={listData2}
        onClose={() => setIsVisible2(false)}
        defaultValue={['Wednesday']}
        onChange={changePicker}
        onConfirm={(list, values) => confirmPicker(list, values)}
      />
    </>
  )
}
export default Demo4
