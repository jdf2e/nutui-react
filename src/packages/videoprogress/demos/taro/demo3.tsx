import React, { useState } from 'react'
import { VideoProgress } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo3 = () => {
  const [percent, setPercent] = useState(60)

  return (
    <View style={{ width: '100%' }}>
      <View
        style={{
          background: '#2c2c2e',
          borderRadius: '8px',
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
      </View>
      <View
        style={{
          color: '#888',
          fontSize: '12px',
          marginTop: '8px',
          textAlign: 'center',
        }}
      >
        当前进度: {percent}%
      </View>
    </View>
  )
}
export default Demo3
