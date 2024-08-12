import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  return (
    <Cell>
      <Progress percent={30} delay={500} lazy />
    </Cell>
  )
}
export default Demo8
