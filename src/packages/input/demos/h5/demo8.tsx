import React, { useState } from 'react'
import { Input } from '@nutui/nutui-react'

const Demo8 = () => {
  const [currentLength, setCurrentLength] = useState(0)
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
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
    </>
  )
}
export default Demo8
