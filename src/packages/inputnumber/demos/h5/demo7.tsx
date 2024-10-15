import React from 'react'
import { Cell, InputNumber } from '@nutui/nutui-react'

const Demo7 = () => {
  return (
    <Cell>
      <InputNumber defaultValue={5.5} step={0.1} digits={1} readOnly />
    </Cell>
  )
}
export default Demo7
