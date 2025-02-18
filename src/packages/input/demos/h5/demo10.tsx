import React from 'react'
import { Input, Space } from '@nutui/nutui-react'

const Demo10 = () => {
  const formatter = (value: string) => value.replace(/\d/g, '')
  return (
    <Space direction="vertical" style={{ marginBottom: 10 }}>
      <Input formatter={formatter} placeholder="在输入时移除数字" />
      <Input
        formatter={formatter}
        formatTrigger="onBlur"
        placeholder="在失焦时移除数字"
      />
    </Space>
  )
}
export default Demo10
