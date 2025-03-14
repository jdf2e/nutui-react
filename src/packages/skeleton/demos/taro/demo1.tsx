import React from 'react'
import { Cell, Skeleton } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <Skeleton animated size="large" duration={3} style={{ width: '100%' }} />
    </Cell>
  )
}
export default Demo1
