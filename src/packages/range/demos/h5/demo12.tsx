import React from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react'

const Demo12 = () => {
  const verticalStyle = {
    height: '180px',
    padding: '10px',
  }
  return (
    <Cell style={verticalStyle}>
      <div style={{ width: '150px', height: '100%' }}>
        <Range
          defaultValue={20}
          vertical
          onEnd={(val) => Toast.show(`${val}`)}
        />
      </div>
      <div style={{ width: '150px', height: '100%' }}>
        <Range
          defaultValue={[20, 80]}
          vertical
          range
          onEnd={(val) => Toast.show(`${val}`)}
        />
      </div>
    </Cell>
  )
}
export default Demo12
