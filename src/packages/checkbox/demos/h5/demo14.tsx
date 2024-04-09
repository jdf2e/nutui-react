import React, { useState } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react'

const Demo14 = () => {
  const [checkboxgroup] = useState<string[]>([])
  const [optionsDemo1] = useState([
    {
      label: '选项1',
      value: '1',
    },
    {
      label: '选项2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项3',
      value: '3',
    },
  ])
  return (
    <Cell>
      <Checkbox.Group options={optionsDemo1} defaultValue={checkboxgroup} />
    </Cell>
  )
}
export default Demo14
