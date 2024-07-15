import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { Add, Dongdong, UserAdd } from '@nutui/icons-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <Add color="red" style={{ marginRight: '10px' }} />
      <UserAdd style={{ marginRight: '10px' }} />
      <Dongdong />
    </Cell>
  )
}
export default Demo1
