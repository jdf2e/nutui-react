import React from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react'

const Demo1 = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return (
    <>
      <Cell style={cellStyle}>
        <Range defaultValue={40} onEnd={(val) => Toast.show(`${val}`)} />
      </Cell>
      <Cell style={cellStyle}>
        <Range
          defaultValue={40}
          marks={[
            { value: 0, label: 'start' },
            { value: 100, label: 'end' },
          ]}
          onEnd={(val) => Toast.show(`${val}`)}
        />
      </Cell>
    </>
  )
}
export default Demo1
