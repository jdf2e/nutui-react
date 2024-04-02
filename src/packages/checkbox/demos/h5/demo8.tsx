import React from 'react'
import { Checkbox, Toast, Cell } from '@nutui/nutui-react'

const Demo8 = () => {
  return (
    <Cell>
      <Checkbox
        defaultChecked={false}
        onChange={(state) => {
          if (state) {
            Toast.show('选中')
          } else {
            Toast.show('取消选中')
          }
        }}
      >
        复选框
      </Checkbox>
    </Cell>
  )
}
export default Demo8
