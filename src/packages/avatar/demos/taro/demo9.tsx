import React from 'react'
import { View } from '@tarojs/components'
import { Avatar, Cell } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  return (
    <Cell className="cell-avatar">
      <Avatar
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        style={{ marginRight: 10 }}
      />
      <View>
        <View style={{ fontSize: 16 }}>标题</View>
        <View style={{ fontSize: 12 }}>描述信息</View>
      </View>
    </Cell>
  )
}
export default Demo9
