import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react'

interface PickerOption {
  text: string | number
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
      { text: '周一', value: 'Monday' },
      { text: '周二', value: 'Tuesday' },
      { text: '周三', value: 'Wednesday' },
      { text: '周四', value: 'Thursday' },
      { text: '周五', value: 'Friday' },
    ],
    // 第二列
    [
      { text: '上午', value: 'Morning' },
      { text: '下午', value: 'Afternoon' },
      { text: '晚上', value: 'Evening' },
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
        onConfirm={(list, values) => confirmPicker(list, values)}
      />
    </>
  )
}
export default Demo4
