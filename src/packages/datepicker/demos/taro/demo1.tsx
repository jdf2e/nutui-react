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
  const [show10, setShow10] = useState(false)
  const [desc10, setDesc10] = useState('')
  const confirm1 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc1(options.map((option) => option.text).join(' '))
  }
  const confirm10 = (options: PickerOption[], values: (string | number)[]) => {
    const v = options
      .map((option) => option.text)
      .join()
      .replace('年', '-')
      .replace('月', '-')
      .replace('日', '')
    setValue(v)
    setDesc10(options.map((option) => option.text).join(' '))
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
          confirm1(values, options)
          console.log('onconfirm')
        }}
      />
      <Cell
        title="显示中文-受控"
        description={desc10}
        onClick={() => setShow10(true)}
      />
      <DatePicker
        title="日期选择"
        visible={show10}
        value={new Date(value)}
        showChinese
        onClose={() => setShow10(false)}
        threeDimensional={false}
        onConfirm={(options, values) => confirm10(options, values)}
      />
    </>
  )
}
export default Demo1
