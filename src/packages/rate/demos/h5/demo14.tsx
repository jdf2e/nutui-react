import React from 'react'
import { Rate, Space } from '@nutui/nutui-react'

const Demo14 = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Rate defaultValue={4} size="small" label="一键评分" />
      <Rate defaultValue={4} label="一键评分" />
      <Rate defaultValue={4} size="large" label="一键评分" />
      <Rate
        defaultValue={4}
        layout="vertical"
        size="large"
        label={['非常不满', '不满意', '一般', '满意', '非常满意']}
      />
    </Space>
  )
}
export default Demo14
