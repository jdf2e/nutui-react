import React from 'react'
import { Price, Cell, CellGroup } from '@nutui/nutui-react'

const Demo10 = () => {
  return (
    <CellGroup>
      <Cell>
        <Price price={618.68} size="small" thousands color="darkgray" />
      </Cell>
      <Cell>
        <Price price={618.68} size="normal" thousands color="dark" />
      </Cell>
      <Cell>
        <Price price={618.68} size="large" thousands color="blue" />
      </Cell>
      <Cell>
        <Price price={618.68} size="xlarge" thousands color="#b5691a" />
      </Cell>
    </CellGroup>
  )
}
export default Demo10
