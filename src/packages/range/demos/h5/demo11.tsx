import React, { useState } from 'react'
import { Range, Cell, Toast } from '@nutui/nutui-react'

const Demo11 = () => {
  const [value, setValue] = useState(60)
  const cellStyle = {
    padding: '40px 18px',
  }
  return (
    <Cell style={cellStyle}>
      <Range
        value={value}
        button={
          <div
            style={{
              position: 'absolute',
              width: '26px',
              color: 'white',
              fontSize: '10px',
              lineHeight: '18px',
              textAlign: 'center',
              backgroundColor: 'red',
              borderRadius: '10px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {value}
          </div>
        }
        onChange={(val: any) => setValue(val)}
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </Cell>
  )
}
export default Demo11
