import React, { useState } from 'react'
import { DatePicker, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState('2012年 01月 01日')
  const confirm1 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc1(options.map((option) => option.text).join(' '))
  }
  return (
    <>
      <Cell
        title="显示中文"
        description={desc1}
        onClick={() => setShow1(true)}
      />
      <DatePicker
        title="日期选择"
        visible={show1}
        showChinese
        onClose={() => setShow1(false)}
        onConfirm={(options, values) => confirm1(values, options)}
      />
    </>
  )
}
export default Demo1
