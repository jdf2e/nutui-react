import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState(defaultDescription)

  const [value, setValue] = useState('2023/01/01')
  const [show2, setShow2] = useState(false)
  const [desc2, setDesc2] = useState('')
  const confirm = (values: (string | number)[], options: PickerOption[]) => {
    setDesc1(options.map((option) => option.text).join(' '))
  }
  const change = (options: PickerOption[], values: (string | number)[]) => {
    const v = values.join('/')
    setValue(v)
    setDesc2(options.map((option) => option.text).join(' '))
  }
  return (
    <>
      <Cell
        title="显示中文-非受控"
        description={desc1}
        onClick={() => setShow1(true)}
      />
      <DatePicker
        title="日期选择"
        visible={show1}
        pickerProps={{
          popupProps: { zIndex: 1220 },
        }}
        defaultValue={new Date(`${defaultDescription}`)}
        showChinese
        onCancel={() => setShow1(false)}
        onConfirm={(options, values) => {
          setShow1(false)
          confirm(values, options)
          console.log('onconfirm')
        }}
      />
      <Cell
        title="显示中文-受控"
        description={desc2}
        onClick={() => setShow2(true)}
      />
      <DatePicker
        title="日期选择"
        visible={show2}
        value={new Date(value)}
        showChinese
        onClose={() => setShow2(false)}
        threeDimensional={false}
        onChange={(options, values) => change(options, values)}
      />
    </>
  )
}
export default Demo1
