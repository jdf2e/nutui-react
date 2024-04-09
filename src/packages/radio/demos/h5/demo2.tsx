import React from 'react'
import { Radio } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio disabled value="1">
        选项1
      </Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
  )
}
export default Demo2
