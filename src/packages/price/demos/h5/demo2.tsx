import React from 'react'
import { Cell, Price } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <Cell>
      <Price price={8888} digits={0} size="normal" thousands />
    </Cell>
  )
}
export default Demo2
