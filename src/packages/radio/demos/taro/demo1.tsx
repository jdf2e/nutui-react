import React from 'react'
import { Radio, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell.Group>
      <Cell>
        <Radio defaultChecked>选项1</Radio>
      </Cell>
      <Cell>
        <Radio defaultChecked labelPosition="left">
          选项1
        </Radio>
      </Cell>
      <Cell>
        <Radio defaultChecked disabled>
          选项1
        </Radio>
      </Cell>
    </Cell.Group>
  )
}
export default Demo1
