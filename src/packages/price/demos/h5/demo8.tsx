import React from 'react'
import { Cell, Price } from '@nutui/nutui-react'

const Demo8 = () => {
  return (
    <Cell align="baseline">
      <Price price={618.68} />
      <span>&nbsp;</span>
      <Price price={1080.68} color="gray" size="small" line />
    </Cell>
  )
}
export default Demo8
