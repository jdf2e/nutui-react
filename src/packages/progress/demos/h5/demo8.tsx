import React from 'react'
import { Cell, Progress } from '@nutui/nutui-react'

const Demo8 = () => {
  return (
    <Cell align="center">
      <Progress percent={30} lazy delay={500} />
    </Cell>
  )
}
export default Demo8
