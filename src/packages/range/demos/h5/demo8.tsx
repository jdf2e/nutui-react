import React from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react'

const Demo8 = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return (
    <Cell style={cellStyle}>
      <Range
        defaultValue={20}
        currentDescription={null}
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </Cell>
  )
}
export default Demo8
