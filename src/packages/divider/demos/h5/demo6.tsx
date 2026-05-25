import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react'

const Demo6 = () => {
  return (
    <Cell align="center">
      文本
      <Divider direction="vertical" />
      <a
        href="#"
        style={{
          color: 'var(--nutui-color-info, #0c82f7)',
          verticalAlign: 'middle',
        }}
      >
        链接
      </a>
      <Divider direction="vertical" />
      <a
        href="#"
        style={{
          color: 'var(--nutui-color-info, #0c82f7)',
          verticalAlign: 'middle',
        }}
      >
        链接
      </a>
    </Cell>
  )
}
export default Demo6
