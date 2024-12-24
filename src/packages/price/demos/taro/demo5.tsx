import React from 'react'
import { Cell, Price } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <Price price={8888.01} position="after" symbol="元" thousands />
    </Cell>
  )
}
export default Demo5
