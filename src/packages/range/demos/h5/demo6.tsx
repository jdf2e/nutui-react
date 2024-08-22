import React from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react'

const Demo6 = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return (
    <Cell style={cellStyle}>
      <Range defaultValue={30} step={5} onEnd={(val) => Toast.show(`${val}`)} />
    </Cell>
  )
}
export default Demo6
