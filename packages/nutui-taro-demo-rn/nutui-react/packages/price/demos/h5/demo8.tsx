import React from 'react'
import { Price } from '@nutui/nutui-react'

const Demo8 = () => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
      }}
    >
      <Price price={1513.12} size='normal' thousands />
      <span>&nbsp;</span>
      <Price price={1513.88} thousands line />
    </div>
  )
}
export default Demo8
