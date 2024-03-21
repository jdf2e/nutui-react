import React from 'react'
import { Price, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Price price={0} size="small" thousands />
      </Cell>
      <Cell>
        <Price price={0} size="normal" thousands />
      </Cell>
      <Cell>
        <Price price={0} size="large" thousands />
      </Cell>
    </>
  )
}
export default Demo1
