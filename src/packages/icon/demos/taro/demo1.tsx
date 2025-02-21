import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { Add, Dongdong, UserAdd, Minus } from '@nutui/icons-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <Add color="red" style={{ marginRight: 10 }} />
      <UserAdd style={{ marginRight: 10 }} />
      <Dongdong style={{ marginRight: 10 }} />
      <Minus />
    </Cell>
  )
}
export default Demo1
