import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'
import '../../demo.scss'

const Demo3 = () => {
  return (
    <Cell
      title={
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          {/* <User /> */}
          {/* <View style={{ marginLeft: 5 }}>我是标题</View> */}
          <View className="nutui-cell-demo-text">我是标题</View>
        </View>
      }
      description={
        <View
          className="nutui-cell-demo-text2"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          我是描述<Text style={{ color: 'red' }}>1</Text>
        </View>
      }
      extra="描述文字"
    />
  )
}
export default Demo3
