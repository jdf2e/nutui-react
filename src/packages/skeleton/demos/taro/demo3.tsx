import React from 'react'
import { Cell, Skeleton } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Cell>
      <Skeleton rows={3} title animated avatar avatarSize="100px" />
    </Cell>
  )
}
export default Demo3
