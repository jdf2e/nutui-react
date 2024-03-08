import React from 'react'
import { Cell } from '@nutui/nutui-react'

const Demo7 = () => {
  return (
    <Cell.Group divider={false}>
      <Cell title="我是标题" extra="描述文字" />
      <Cell title="我是标题" extra="描述文字" />
    </Cell.Group>
  )
}
export default Demo7
