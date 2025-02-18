import React from 'react'
import { Input, Space } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  return (
    <Space direction="vertical" style={{ marginBottom: 10 }}>
      <Input align="left" placeholder="文本内容对齐" />
      <Input align="right" placeholder="文本内容对齐" />
    </Space>
  )
}
export default Demo11
