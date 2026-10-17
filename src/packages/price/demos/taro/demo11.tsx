import React from 'react'
import { Price, Cell, CellGroup } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  return (
    <CellGroup>
      <Cell>
        <Price price={618} size="small" thousands digits={null} />
      </Cell>
      <Cell>
        <Price price={618.6} size="normal" thousands digits={null} />
      </Cell>
      <Cell>
        <Price price={618.18} size="large" thousands digits={null} />
      </Cell>
      <Cell>
        <Price price={618.111} size="xlarge" thousands digits={null} />
      </Cell>
    </CellGroup>
  )
}
export default Demo11
