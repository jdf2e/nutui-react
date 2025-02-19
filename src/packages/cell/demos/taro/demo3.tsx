import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'
import { User } from '@nutui/icons-react-taro'

const Demo3 = () => {
  return (
    <Cell
      title={
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            height: 20,
          }}
        >
          <User size={16} />
          <View style={{ marginLeft: 5 }}>我是标题</View>
        </View>
      }
      description={
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: 12,
            color: '#505259',
            height: 20,
          }}
        >
          我是描述
          <Text style={{ color: 'red', fontSize: 12 }}>1</Text>
        </View>
      }
      extra="描述文字"
    />
  )
}
export default Demo3
