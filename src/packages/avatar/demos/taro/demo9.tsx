import React from 'react'
import { View } from '@tarojs/components'
import { Avatar } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  return (
    <>
      <Avatar
        size="normal"
        style={{ marginRight: 0 }}
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
      <View style={{ marginLeft: '10px' }}>
        <View style={{ fontSize: '16px' }}>标题</View>
        <View style={{ fontSize: '12px' }}>描述信息</View>
      </View>
    </>
  )
}
export default Demo9
