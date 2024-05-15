import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import { Loading } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'

const Demo3 = () => {
  const imageText: React.CSSProperties = {
    width: 80,
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: 98 }}>
          <Image width="80" height="80" />
          <View style={imageText}>默认</View>
        </div>
        <div style={{ width: 98 }}>
          <Image
            width="80"
            height="80"
            loading={<Loading className="nut-icon-loading" />}
          />
          <View style={imageText}>自定义</View>
        </div>
      </div>
    </>
  )
}
export default Demo3
