import React from 'react'
import { Divider, Input, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Input placeholder="请输入文本：容器型" />
      <Divider />
      <Input placeholder="请输入文本：纯文本型" plain />
    </Cell>
  )
}
export default Demo1
