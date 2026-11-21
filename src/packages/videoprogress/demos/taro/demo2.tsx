import React from 'react'
import { VideoProgress } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Play } from '@nutui/icons-react-taro'

const Demo2 = () => {
  return (
    <View
      style={{
        background: '#2c2c2e',
        borderRadius: '8px',
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
    </View>
  )
}
export default Demo2
