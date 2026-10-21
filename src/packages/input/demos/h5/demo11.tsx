import React from 'react'
import { Input, Space, Cell } from '@nutui/nutui-react'

const Demo11 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Space direction="vertical" style={{ marginBottom: 10 }}>
        <Input align="left" placeholder="文本内容对齐" />
        <Input align="right" placeholder="文本内容对齐" />
      </Space>
    </Cell>
  )
}
export default Demo11
