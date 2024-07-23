import React from 'react'
import { Price, Cell } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <Cell>
      <Price price={15213.1221} size="normal" digits={3} thousands />
    </Cell>
  )
}
export default Demo4
