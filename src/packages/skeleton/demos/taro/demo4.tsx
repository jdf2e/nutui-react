import React from 'react'
import { Cell, Skeleton, pxTransform } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Cell>
      <Skeleton width={pxTransform(132)} height={pxTransform(132)} />
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          marginLeft: pxTransform(10),
        }}
      >
        <Skeleton size="large" style={{ marginBottom: pxTransform(5) }} />
        <Skeleton width="30%" style={{ marginBottom: pxTransform(5) }} />
        <Skeleton width="80%" size="small" rows={3} />
      </div>
    </Cell>
  )
}
export default Demo4
