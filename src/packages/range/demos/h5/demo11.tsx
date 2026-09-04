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
              minWidth: '36px',
              padding: '0 6px',
              height: '20px',
              color: 'white',
              fontSize: '12px',
              lineHeight: '18px',
              textAlign: 'center',
              backgroundColor: 'red',
              border: '1px solid var(--nutui-color-background-overlay,#fff)',
              borderRadius: '10px',
              boxShadow:
                '0 1px 10px 0 rgba(0, 0, 0, 0.05), 0 4px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.12)',
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
