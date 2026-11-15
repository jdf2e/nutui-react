import React from 'react'
import { VideoProgress } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <div
      style={{
        background: '#2c2c2e',
        borderRadius: 8,
        padding: '0 16px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <VideoProgress percent={30} status="static" />
    </div>
  )
}
export default Demo1
