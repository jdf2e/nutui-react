import React from 'react'
import { Cell, Skeleton } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Skeleton rows={3} title animated />
    </Cell>
  )
}
export default Demo2
