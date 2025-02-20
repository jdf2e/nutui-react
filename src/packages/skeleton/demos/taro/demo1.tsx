import React from 'react'
import { Cell, Skeleton } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell style={{ display: 'block', paddingTop: '3px' }}>
      <Skeleton animated />
    </Cell>
  )
}
export default Demo1
