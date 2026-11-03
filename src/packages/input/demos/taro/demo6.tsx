import React from 'react'
import { Input, Space, Cell } from '@nutui/nutui-react-taro'
import { Close } from '@nutui/icons-react-taro'

const Demo6 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Space direction="vertical" style={{ marginBottom: 10 }}>
        <Input clearable placeholder="显示清除图标" />
        <Input clearable clearIcon={<Close />} placeholder="显示清除图标" />
      </Space>
    </Cell>
  )
}
export default Demo6
