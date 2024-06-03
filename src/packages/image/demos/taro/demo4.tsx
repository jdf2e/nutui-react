import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import { Failure } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'

const Demo4 = () => {
  const imageText: React.CSSProperties = {
    width: 80,
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap' }}>
        <View style={{ width: 98 }}>
          <Image src="https://x" width="80" height="80" />
          <View style={imageText}>默认</View>
        </View>
        <View style={{ width: 98 }}>
          <Image src="https://x" width="80" height="80" error={<Failure />} />
          <View style={imageText}>自定义</View>
        </View>
      </View>
    </>
  )
}
export default Demo4
