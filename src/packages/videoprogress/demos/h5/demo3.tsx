import React, { useState } from 'react'
import { VideoProgress } from '@nutui/nutui-react'

const Demo3 = () => {
  const [percent, setPercent] = useState(60)

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          background: '#2c2c2e',
          borderRadius: 8,
          padding: '0 16px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <VideoProgress
          percent={percent}
          draggable
          onChange={(val) => setPercent(Math.round(val))}
        />
      </div>
      <div
        style={{
          color: '#888',
          fontSize: 12,
          marginTop: 8,
          textAlign: 'center',
        }}
      >
        当前进度: {percent}%
      </div>
    </div>
  )
}
export default Demo3
