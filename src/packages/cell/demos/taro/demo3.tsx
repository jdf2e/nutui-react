import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'
import { User } from '@nutui/icons-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo3 = () => {
  return (
    <Cell
      title={
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            lineHeight: pxTransform(20),
          }}
        >
          <User size={16} />
          <View style={{ marginLeft: pxTransform(5) }}>我是标题</View>
        </View>
      }
      description={
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: pxTransform(12),
            color: '#505259',
          }}
        >
          我是描述
          <Text style={{ color: 'red', fontSize: pxTransform(12) }}>1</Text>
        </View>
      }
      extra="描述文字"
    />
  )
}
export default Demo3
