import React from 'react'
import { Input, Cell } from '@nutui/nutui-react-taro'

const Demo16 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Input
        status="error"
        placeholder="请输入用户名"
        description="请输入用户名"
      />
    </Cell>
  )
}

export default Demo16
