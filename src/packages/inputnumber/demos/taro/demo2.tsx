import React from 'react'
import { Cell, InputNumber } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell>
      <InputNumber defaultValue={0} min={0} step={5} />
    </Cell>
  )
}
export default Demo2
