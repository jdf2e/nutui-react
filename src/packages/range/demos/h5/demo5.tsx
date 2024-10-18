import React from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react'

const Demo5 = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return (
    <Cell style={cellStyle}>
      <Range
        defaultValue={-8}
        max={-6}
        min={-10}
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </Cell>
  )
}
export default Demo5
