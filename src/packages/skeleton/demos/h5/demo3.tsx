import React from 'react'
import { Cell, Skeleton, Space } from '@nutui/nutui-react'

const Demo3 = () => {
  return (
    <Cell>
      <Space>
        <Skeleton width={60} height={60} />
        <Skeleton width={60} height={60} shape="circle" />
      </Space>
    </Cell>
  )
}
export default Demo3
