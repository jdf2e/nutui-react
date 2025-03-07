import React from 'react'
import { Cell, Skeleton, ConfigProvider } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo4 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <ConfigProvider
        theme={{
          nutuiSkeletonLineBorderRadius: pxTransform(10),
        }}
      >
        <Skeleton rows={3} animated />
      </ConfigProvider>
    </Cell>
  )
}
export default Demo4
