import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Radio.Group disabled defaultValue="1">
      <Radio value="1">选项1</Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
  )
}
export default Demo3
