import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  return (
    <Radio.Group defaultValue={1} shape="button">
      <Radio value={1}>设置形状</Radio>
      <Radio value={2}>设置形状</Radio>
    </Radio.Group>
  )
}
export default Demo12
