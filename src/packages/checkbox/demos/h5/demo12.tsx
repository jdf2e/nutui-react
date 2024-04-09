import React, { useState } from 'react'
import { Checkbox, Toast, Cell } from '@nutui/nutui-react'

const Demo12 = () => {
  const [checkboxgroup, setCheckboxgroup] = useState(['1'])
  return (
    <Cell>
      <Checkbox.Group
        defaultValue={checkboxgroup}
        max={3}
        min={1}
        onLimit={(type) =>
          Toast.show(type === 'max' ? '最多选择3项' : '至少选择1项')
        }
      >
        <Checkbox value="1">选项</Checkbox>
        <Checkbox value="2">选项</Checkbox>
        <Checkbox value="3">选项</Checkbox>
        <Checkbox value="4">选项</Checkbox>
      </Checkbox.Group>
    </Cell>
  )
}
export default Demo12
