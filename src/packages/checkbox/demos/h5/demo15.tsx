import React, { useState } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react'

const Demo15 = () => {
  const [optionsDemo1] = useState([
    {
      label: '选项 1',
      value: '1',
    },
    {
      label: '选项 2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项 3',
      value: '3',
    },
  ])
  return (
    <Cell>
      <Checkbox.Group defaultValue={['1']} list>
        <Checkbox value="1" label={optionsDemo1[0].label} />
        <Checkbox value="2" label={optionsDemo1[1].label} />
        <Checkbox value="3" label={optionsDemo1[2].label} />
      </Checkbox.Group>
    </Cell>
  )
}
export default Demo15
