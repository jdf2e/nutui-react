import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <Cell>
      <Divider
        style={{
          color: 'var(--nutui-color-info, #0c82f7)',
          borderColor: 'var(--nutui-color-info, #0c82f7)',
          padding: '0 16px',
          borderStyle: 'dashed',
        }}
      >
        文本
      </Divider>
    </Cell>
  )
}
export default Demo5
