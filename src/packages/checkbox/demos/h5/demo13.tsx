import React, { useState, useRef } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react'

const Demo13 = () => {
  const [checkboxgroup, setCheckboxgroup] = useState(['1'])
  const checkboxgroupRef = useRef(null)
  const [checkbox1, setCheckbox1] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  return (
    <Cell>
      <div style={{ width: '50%' }}>
        <Checkbox
          checked={checkbox1}
          indeterminate={indeterminate}
          onChange={(state) => {
            if (state) {
              setIndeterminate(false)
            }
            setCheckbox1(state)
            ;(checkboxgroupRef.current as any).toggle(state)
          }}
        >
          全选
        </Checkbox>
      </div>

      <Checkbox.Group
        ref={checkboxgroupRef}
        direction="horizontal"
        defaultValue={checkboxgroup}
        onChange={(value) => {
          if (value.length === 4) {
            setIndeterminate(false)
            setCheckbox1(true)
          } else if (value.length && value.length < 4) {
            setIndeterminate(true)
            setCheckbox1(true)
          } else {
            setCheckbox1(false)
          }
        }}
      >
        <Checkbox value="1">选项</Checkbox>
        <Checkbox value="2">选项</Checkbox>
        <Checkbox value="3">选项</Checkbox>
        <Checkbox value="4">选项</Checkbox>
      </Checkbox.Group>
    </Cell>
  )
}
export default Demo13
