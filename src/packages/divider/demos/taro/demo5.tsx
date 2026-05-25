import React from 'react'
import { Cell, Divider, pxTransform } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <Divider
        style={{
          color: 'var(--nutui-color-info, #0c82f7)',
          paddingLeft: pxTransform(16),
          paddingRight: pxTransform(16),
          borderColor: 'var(--nutui-color-info, #0c82f7)',
          borderStyle: 'dashed',
        }}
      >
        文本
      </Divider>
    </Cell>
  )
}
export default Demo5
