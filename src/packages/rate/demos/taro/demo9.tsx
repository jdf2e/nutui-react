import React from 'react'
import { Rate, Space } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  return (
    <Space direction="vertical">
      <Rate defaultValue={3} readOnly />
      <Rate defaultValue={4} readOnly showScore label="评分" />
    </Space>
  )
}
export default Demo9
