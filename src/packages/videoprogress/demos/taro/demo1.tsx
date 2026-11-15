import React from 'react'
import { VideoProgress } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
  return (
    <View
      style={{
        background: '#2c2c2e',
        borderRadius: '8px',
        padding: '0 16px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <VideoProgress percent={30} status="static" />
    </View>
  )
}
export default Demo1
