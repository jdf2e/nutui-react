import React from 'react'
import { Radio, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <Cell.Group>
      <Cell>
        <Radio defaultChecked ariaLabel="checkbox">
          选项1
        </Radio>
      </Cell>
      <Cell>
        <Radio defaultChecked labelPosition="left" ariaLabel="checkbox">
          选项1
        </Radio>
      </Cell>
      <Cell>
        <Radio defaultChecked disabled ariaLabel="checkbox">
          选项1
        </Radio>
      </Cell>
    </Cell.Group>
  )
}
export default Demo1
