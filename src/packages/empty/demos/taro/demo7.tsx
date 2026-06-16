import React from 'react'
import { Cell, Empty, pxTransform } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  return (
    <Cell>
      <Empty description="内容描述内容描述" imageSize={pxTransform(80)} />
    </Cell>
  )
}
export default Demo7
