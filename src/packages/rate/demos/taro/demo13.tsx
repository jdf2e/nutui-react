import React from 'react'
import { Rate, Space } from '@nutui/nutui-react-taro'

const Demo13 = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Rate
        defaultValue={4}
        layout="vertical"
        label={['不满意', '', '', '', '非常满意']}
      />
      <Rate
        defaultValue={4}
        layout="vertical"
        size="large"
        label={['不满意', '', '', '', '非常满意']}
      />
    </Space>
  )
}
export default Demo13
