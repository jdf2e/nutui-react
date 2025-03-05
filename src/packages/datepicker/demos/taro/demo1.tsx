import React, { useState } from 'react'
import {
  DatePicker,
  Cell,
  PickerOptions,
  PickerValue,
} from '@nutui/nutui-react-taro'
import isEqual from 'react-fast-compare'

const useDatePicker = (initialDate: Date) => {
  const defaultDateObj = {
    year: initialDate.getFullYear(),
    month: initialDate.getMonth() + 1,
    day: initialDate.getDate(),
  }

  const defaultDesc = `${defaultDateObj.year}年${defaultDateObj.month}月${defaultDateObj.day}日`
  const defaultValue = Object.values(defaultDateObj).join('-')

  return { defaultDesc, defaultValue }
}

const Demo1 = () => {
  const defaultDate = new Date()
  const { defaultDesc: defaultDesc1, defaultValue: defaultValue1 } =
    useDatePicker(defaultDate)
  const { defaultDesc: defaultDesc2, defaultValue: defaultValue2 } =
    useDatePicker(defaultDate)

  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState(defaultDesc1)

  const [value, setValue] = useState(defaultValue2)
  const [show2, setShow2] = useState(false)
  const [desc2, setDesc2] = useState(defaultDesc2)

  const handleConfirm =
    (setDesc: (desc: string) => void, setValue?: (value: string) => void) =>
    (options: PickerOptions, values: PickerValue[]) => {
      if (setValue) {
        if (isEqual(values, ['2026', '02', '21'])) {
          setValue('2026/03/22')
          setDesc('2026年03月22日')
        } else {
          setValue(values.join('/'))
          setDesc(options.map((option) => option.label).join(''))
        }
      } else {
        setDesc(options.map((option) => option.label).join(''))
      }
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
        defaultValue={new Date(defaultValue1)}
        showChinese
        onClose={() => setShow1(false)}
        onConfirm={handleConfirm(setDesc1)}
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
        onConfirm={handleConfirm(setDesc2, setValue)}
      />
    </>
  )
}

export default Demo1
