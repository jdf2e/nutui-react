import React from 'react'
import { Radio, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell.Group>
      <Cell>
        <Radio defaultChecked ariaLabel="选项1">
          选项1
        </Radio>
      </Cell>
      <Cell>
        <Radio defaultChecked labelPosition="left" ariaLabel="选项1-左对齐">
          选项1
        </Radio>
      </Cell>
      <Cell>
        <Radio defaultChecked disabled ariaLabel="选项1-禁用">
          选项1
        </Radio>
      </Cell>
    </Cell.Group>
  )
}
export default Demo1
