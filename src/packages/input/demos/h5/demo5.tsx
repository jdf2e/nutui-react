import React from 'react'
import { Input, Space, Cell } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Space direction="vertical" style={{ marginBottom: 10 }}>
        <Input readOnly value="输入框只读" />
        <Input disabled placeholder="输入框禁用" />
      </Space>
    </Cell>
  )
}
export default Demo5
