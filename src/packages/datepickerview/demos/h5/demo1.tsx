import React, { useState } from 'react'
import {
  DatePickerView,
  Cell,
  PickerValue,
  PickerOptions,
  CellGroup,
} from '@nutui/nutui-react'
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

  const [desc1, setDesc1] = useState(defaultDesc1)

  const [value, setValue] = useState(defaultValue2)
  const [desc2, setDesc2] = useState(defaultDesc2)

  const handleChange =
    (setDesc: (desc: string) => void, setValue?: (value: string) => void) =>
    (selectedOptions: PickerOptions, value: PickerValue[]) => {
      if (setValue) {
        if (isEqual(value, ['2026', '02', '26'])) {
          setValue('2026/03/22')
          setDesc('2026年03月22日')
        } else {
          setValue(value.join('/'))
          setDesc(selectedOptions.map((option) => option.label).join(''))
        }
      } else {
        setDesc(selectedOptions.map((option) => option.label).join(''))
      }
    }

  return (
    <>
      <CellGroup>
        <Cell title="显示中文-非受控" description={desc1} />
        <Cell>
          <DatePickerView
            defaultValue={new Date(defaultValue1)}
            showChinese
            onChange={handleChange(setDesc1)}
          />
        </Cell>
      </CellGroup>
      <CellGroup>
        <Cell title="显示中文-受控" description={desc2} />
        <Cell>
          <DatePickerView
            value={new Date(value)}
            showChinese
            onChange={handleChange(setDesc2, setValue)}
          />
        </Cell>
      </CellGroup>
    </>
  )
}

export default Demo1
