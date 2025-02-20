import React from 'react'
import { Cell, Skeleton } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <Cell style={{ display: 'block', paddingTop: '3px' }}>
      <Skeleton rows={3} title animated />
    </Cell>
  )
}
export default Demo2
