import React from 'react'
import { Price, Cell, CellGroup } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <CellGroup>
      <Cell>
        <Price price={618.68} size="small" thousands />
      </Cell>
      <Cell>
        <Price price={618.68} size="normal" thousands />
      </Cell>
      <Cell>
        <Price price={618.68} size="large" thousands />
      </Cell>
      <Cell>
        <Price price={618.68} size="xlarge" thousands />
      </Cell>
    </CellGroup>
  )
}
export default Demo1
