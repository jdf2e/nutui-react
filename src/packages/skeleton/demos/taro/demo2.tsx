import React from 'react'
import { Cell, Skeleton } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell>
      <Skeleton rows={3} animated size="small" style={{ width: '100%' }} />
    </Cell>
  )
}
export default Demo2
