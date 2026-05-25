import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const Demo4 = () => {
  return (
    <Cell>
      <Dongdong
        color="var(--nutui-color-primary, #ff0f23)"
        style={{ marginRight: 10 }}
      />
      <Dongdong color="#64b578" style={{ marginRight: 10 }} />
      <Dongdong color="#ffd700" />
    </Cell>
  )
}

export default Demo4
