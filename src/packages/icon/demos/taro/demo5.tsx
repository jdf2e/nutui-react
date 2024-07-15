import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { IconFont } from '@nutui/icons-react-taro'

const Demo5 = () => {
  return (
    <Cell style={{ alignItems: 'center' }}>
      <IconFont name="dongdong" size="16" style={{ marginRight: '10px' }} />
      <IconFont name="dongdong" size="20" style={{ marginRight: '10px' }} />
      <IconFont name="dongdong" size="24" />
    </Cell>
  )
}

export default Demo5
