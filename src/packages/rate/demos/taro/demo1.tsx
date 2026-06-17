import React from 'react'
import { Rate, Space } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Space direction="vertical">
      <Rate defaultValue={3} size="small" />
      <Rate defaultValue={3} />
      <Rate defaultValue={3} size="large" />
    </Space>
  )
}
export default Demo1
