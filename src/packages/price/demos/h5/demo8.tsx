import React from 'react'
import { Cell, Price } from '@nutui/nutui-react'

const Demo8 = () => {
  return (
    <Cell>
      <Price price={1513.12} size="normal" thousands />
      <span>&nbsp;</span>
      <Price price={1513.88} thousands line />
    </Cell>
  )
}
export default Demo8
