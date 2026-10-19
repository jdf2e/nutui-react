import React, { useState } from 'react'
import { Input, Cell } from '@nutui/nutui-react'

const Demo8 = () => {
  const [currentLength, setCurrentLength] = useState(0)
  return (
    <Cell style={{ display: 'block' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f0f2f7',
          padding: '0 10px',
        }}
      >
        <Input
          type="text"
          maxLength={20}
          onChange={(val) => setCurrentLength(val.length)}
        />
        <div className="right" style={{ fontSize: '12px' }}>
          {currentLength} / 20
        </div>
      </div>
    </Cell>
  )
}
export default Demo8
