import React, { useState } from 'react'
import { Checkbox, Toast, Cell } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [showToast, setShowToast] = useState(false)
  const [content, setContent] = useState('')
  const handleChange = (state: any) => {
    if (state) {
      setContent('选中')
    } else {
      setContent('取消选中')
    }
    setShowToast(true)
  }
  return (
    <>
      <Toast
        content={content}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
      <Checkbox
        defaultChecked={false}
        onChange={(state) => handleChange(state)}
      >
        change复选框
      </Checkbox>
      <Cell className="nut-cell">
        <Checkbox
          defaultChecked={false}
          onChange={(state) => handleChange(state)}
        >
          复选框
        </Checkbox>
      </Cell>
    </>
  )
}
export default Demo8
