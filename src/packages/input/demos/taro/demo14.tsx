import React from 'react'
import { Input, Cell } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Input
        style={{
          '--nutui-input-border-bottom-width': '1px',
          '--nutui-input-color': 'red',
        }}
        placeholder="边框"
      />
    </Cell>
  )
}
export default Demo11
