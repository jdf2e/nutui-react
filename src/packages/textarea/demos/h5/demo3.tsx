import React from 'react'
import { TextArea } from '@nutui/nutui-react'

const Demo = () => {
  return (
    <TextArea
      showCount
      maxLength={20}
      defaultValue="这是一段超过最大字数限制的文本内容，用于展示超限状态"
    />
  )
}
export default Demo
