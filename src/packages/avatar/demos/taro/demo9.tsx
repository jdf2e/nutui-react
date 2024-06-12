import React from 'react'
import { View } from '@tarojs/components'
import { Avatar } from '@nutui/nutui-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo9 = () => {
  return (
    <>
      {harmonyAndRn() ? (
        <Avatar>N</Avatar>
      ) : (
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
      )}
      <View style={{ marginLeft: pxTransform(10) }}>
        <View style={{ fontSize: pxTransform(16) }}>标题</View>
        <View style={{ fontSize: pxTransform(12) }}>描述信息</View>
      </View>
    </>
  )
}
export default Demo9
