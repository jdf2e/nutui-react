import React from 'react'
import { Skeleton, ConfigProvider } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <ConfigProvider
      theme={{
        nutuiSkeletonLineBorderRadius: '10px',
      }}
    >
      <Skeleton rows={3} animated />
    </ConfigProvider>
  )
}
export default Demo4
