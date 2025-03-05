import React, { useState } from 'react'
import {
  DatePickerView,
  Cell,
  PickerOptions,
  CellGroup,
} from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const defaultValue = new Date()
  const [desc, setDesc] = useState(
    `${defaultValue.getMonth() + 1}-${defaultValue.getDate()}`
  )

  const onChange = (options: PickerOptions) => {
    setDesc(options.map((option) => option.label).join('-'))
  }
  return (
    <CellGroup>
      <Cell title="限制开始结束时间" description={desc} />
      <Cell>
        <DatePickerView
          startDate={new Date()}
          endDate={new Date(`${defaultValue.getFullYear()}-07-01`)}
          defaultValue={defaultValue}
          type="month-day"
          onChange={(selectedOptions) => onChange(selectedOptions)}
        />
      </Cell>
    </CellGroup>
  )
}
export default Demo2
