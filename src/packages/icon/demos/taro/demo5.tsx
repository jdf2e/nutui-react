import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const Demo5 = () => {
  return (
    <Cell style={{ alignItems: 'center' }}>
      <Dongdong size="16" style={{ marginRight: 10 }} />
      <Dongdong size="20" style={{ marginRight: 10 }} />
      <Dongdong size="24" />
    </Cell>
  )
}

export default Demo5
