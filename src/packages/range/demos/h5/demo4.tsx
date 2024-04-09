import React from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react'

const Demo4 = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return (
    <Cell style={cellStyle}>
      <Range
        defaultValue={[20, 80]}
        range
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </Cell>
  )
}
export default Demo4
