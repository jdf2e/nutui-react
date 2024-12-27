import React from 'react'
import { Input, Space } from '@nutui/nutui-react'
import { Close } from '@nutui/icons-react'

const Demo6 = () => {
  return (
    <Space direction="vertical" style={{ marginBottom: 10 }}>
      <Input clearable placeholder="显示清除图标" />
      <Input clearable clearIcon={<Close />} placeholder="显示清除图标" />
    </Space>
  )
}
export default Demo6
