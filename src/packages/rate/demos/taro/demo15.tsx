import React from 'react'
import { Rate, Space } from '@nutui/nutui-react-taro'

const Demo15 = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Rate defaultValue={0} size="large" />
      <Rate defaultValue={0} layout="vertical" size="large" />
    </Space>
  )
}
export default Demo15
