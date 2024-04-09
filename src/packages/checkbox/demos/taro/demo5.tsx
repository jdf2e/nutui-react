import React from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox
          labelPosition="right"
          label="未选时禁用状态"
          checked={false}
          disabled
        />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox
          labelPosition="right"
          label="半选时禁用状态"
          checked
          disabled
          indeterminate
        />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox
          labelPosition="right"
          label="选中时禁用状态"
          checked
          disabled
        />
      </Cell>
    </>
  )
}
export default Demo5
