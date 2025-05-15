import React from 'react'
import { Cell, Skeleton } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <Cell>
      <Skeleton width={132} height={132} />
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          marginLeft: 10,
        }}
      >
        <Skeleton size="large" style={{ marginBottom: 5 }} />
        <Skeleton width="30%" style={{ marginBottom: 5 }} />
        <Skeleton width="80%" size="small" rows={3} />
      </div>
    </Cell>
  )
}
export default Demo4
