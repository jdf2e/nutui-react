import React from 'react'
import { VideoProgress } from '@nutui/nutui-react'
import { Play } from '@nutui/icons-react'

const Demo2 = () => {
  return (
    <div
      style={{
        background: '#2c2c2e',
        borderRadius: 8,
        padding: '0 16px 0 28px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <VideoProgress
        percent={50}
        status="paused"
        pausedIcon={<Play size={12} color="#ffffff" />}
      />
    </div>
  )
}
export default Demo2
