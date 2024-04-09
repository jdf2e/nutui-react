import React, { useState } from 'react'
import { Checkbox, Toast, Cell } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const [showToast, setShowToast] = useState(false)
  const [content, setContent] = useState('')
  const handleLimit = (type: any) => {
    setContent(type === 'max' ? '最多选择3项' : '至少选择1项')
    setShowToast(true)
  }
  return (
    <Cell>
      <Toast
        content={content}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
      <Checkbox.Group
        defaultValue={checkboxgroup2}
        max={3}
        min={1}
        onLimit={(type) => handleLimit(type)}
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
