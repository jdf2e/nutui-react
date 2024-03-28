import React, { useState } from 'react'
import { Range, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [value, setValue] = useState(40)
  const cellStyle = {
    padding: '40px 18px',
  }
  return (
    <Cell style={cellStyle}>
      <Range value={value} onChange={(val: any) => setValue(val)} />
    </Cell>
  )
}
export default Demo2
