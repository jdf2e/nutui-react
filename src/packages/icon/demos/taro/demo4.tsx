import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { IconFont } from '@nutui/icons-react-taro'

const Demo4 = () => {
  return (
    <Cell>
      <IconFont
        name="dongdong"
        color="#FF0F23"
        style={{ marginRight: '10px' }}
      />
      <IconFont
        name="dongdong"
        color="#64b578"
        style={{ marginRight: '10px' }}
      />
      <IconFont name="dongdong" color="#ffd700" />
    </Cell>
  )
}

export default Demo4
