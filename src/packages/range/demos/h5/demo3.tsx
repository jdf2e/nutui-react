import React from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react'

const Demo3 = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return (
    <Cell style={cellStyle}>
      <Range
        defaultValue={40}
        minDescription="0%"
        maxDescription="100%"
        currentDescription={(value) => `${value}%`}
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </Cell>
  )
}
export default Demo3
