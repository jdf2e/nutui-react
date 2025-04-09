import React from 'react'
import { Cell, Skeleton, Space, pxTransform } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Cell>
      <Space>
        <Skeleton width={pxTransform(60)} height={pxTransform(60)} />
        <Skeleton
          width={pxTransform(60)}
          height={pxTransform(60)}
          shape="circle"
        />
      </Space>
    </Cell>
  )
}
export default Demo3
