import React, { useState } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react'

const Demo9 = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <>
      <Cell>
        <Checkbox.Group
          defaultValue={checkboxgroup1}
          direction="horizontal"
          onChange={(value) => {
            setCheckboxgroup1(value)
          }}
        >
          <Checkbox value="1">选项</Checkbox>
          <Checkbox value="2">选项</Checkbox>
          <Checkbox value="3">选项</Checkbox>
          <Checkbox value="4">选项</Checkbox>
        </Checkbox.Group>
      </Cell>
      <Cell>
        <span>选中：{checkboxgroup1.toString()}</span>
      </Cell>
    </>
  )
}
export default Demo9
