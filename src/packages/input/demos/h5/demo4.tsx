import React from 'react'
import { Input, Space } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <Space direction="vertical" style={{ marginBottom: 10 }}>
      <Input type="text" placeholder="请输入文本" />
      <Input type="password" placeholder="请输入密码" />
      <Input type="digit" placeholder="请输入数字" />
      <Input type="number" placeholder="请输入整数" />
    </Space>
  )
}
export default Demo4
