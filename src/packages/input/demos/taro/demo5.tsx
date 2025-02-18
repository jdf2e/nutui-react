import React from 'react'
import { Input, Space } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Space direction="vertical" style={{ marginBottom: 10 }}>
      <Input readOnly value="输入框只读" />
      <Input disabled placeholder="输入框禁用" />
    </Space>
  )
}
export default Demo5
