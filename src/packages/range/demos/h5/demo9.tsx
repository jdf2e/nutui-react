import React from 'react'
import { Range, Cell } from '@nutui/nutui-react'

const Demo9 = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return (
    <Cell style={cellStyle}>
      <Range defaultValue={50} disabled />
    </Cell>
  )
}
export default Demo9
