import React from 'react'
import { Cell, Skeleton, ConfigProvider } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <ConfigProvider
        theme={{
          nutuiSkeletonLineBorderRadius: '10px',
        }}
      >
        <Skeleton rows={3} animated />
      </ConfigProvider>
    </Cell>
  )
}
export default Demo4
