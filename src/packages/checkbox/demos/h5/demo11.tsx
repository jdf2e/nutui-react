import React, { useState, useRef } from 'react'
import { Checkbox, Button, Toast, Cell } from '@nutui/nutui-react'

const Demo11 = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (
    <>
      <Cell>
        <Checkbox.Group
          labelPosition="left"
          direction="horizontal"
          ref={checkboxgroup2Ref}
          defaultValue={checkboxgroup2}
          onChange={(value) => {
            Toast.show(`${value.length === 4 ? '全选' : '取消全选'}`)
          }}
        >
          <Checkbox value="1">选项</Checkbox>
          <Checkbox value="2">选项</Checkbox>
          <Checkbox value="3">选项</Checkbox>
          <Checkbox value="4">选项</Checkbox>
        </Checkbox.Group>
      </Cell>
      <Cell>
        <Button
          type="primary"
          onClick={() => {
            ;(checkboxgroup2Ref.current as any).toggle(true)
          }}
          style={{ marginInlineEnd: '20px' }}
        >
          全选
        </Button>
        <Button
          onClick={() => {
            ;(checkboxgroup2Ref.current as any).toggle(false)
          }}
          style={{ marginInlineEnd: '20px' }}
        >
          取消
        </Button>
        <Button
          type="warning"
          onClick={() => {
            ;(checkboxgroup2Ref.current as any).reverse()
          }}
        >
          反选
        </Button>
      </Cell>
    </>
  )
}
export default Demo11
