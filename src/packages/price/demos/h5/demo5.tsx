import React from 'react'
import { Price } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <Price
      price={8888.01}
      size="normal"
      position="after"
      symbol="元"
      thousands
    />
  )
}
export default Demo5
