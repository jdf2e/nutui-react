import React, { useState } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const [checkboxgroup1] = useState(['1'])
  return (
    <Cell>
      <Checkbox.Group
        defaultValue={checkboxgroup1}
        disabled
        direction="horizontal"
      >
        <Checkbox value="1">选项</Checkbox>
        <Checkbox value="2">选项</Checkbox>
        <Checkbox value="3">选项</Checkbox>
        <Checkbox value="4">选项</Checkbox>
      </Checkbox.Group>
    </Cell>
  )
}
export default Demo10
