import React from 'react'
import { Divider, Input, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Input placeholder="请输入文本：容器型" />
      <Divider />
      <Input plain placeholder="请输入文本：纯文本型" />
    </Cell>
  )
}
export default Demo1
