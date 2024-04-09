import React, { useState } from 'react'
import { Checkbox, Toast, Cell } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  const [showToast, setShowToast] = useState(false)
  const [content, setContent] = useState('')
  const handleChange = (value: any) => {
    setContent(value.toString())
    setShowToast(true)
    setCheckboxgroup1(value)
  }
  return (
    <>
      <Cell>
        <Toast
          content={content}
          visible={showToast}
          onClose={() => {
            setShowToast(false)
          }}
        />
        <Checkbox.Group
          defaultValue={checkboxgroup1}
          direction="horizontal"
          onChange={(value) => handleChange(value)}
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
