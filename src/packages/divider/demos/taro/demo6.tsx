import React from 'react'
import { Divider } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'

const Demo6 = () => {
  return (
    <View>
      文本
      <Divider direction="vertical" />
      <Text
        onClick={() => {
          console.log('跳转')
        }}
        style={{ color: '#1989fa', verticalAlign: 'middle' }}
      >
        链接
      </Text>
      <Divider direction="vertical" />
      <Text
        onClick={() => {
          console.log('跳转')
        }}
        style={{ color: '#1989fa', verticalAlign: 'middle' }}
      >
        链接
      </Text>
    </View>
  )
}
export default Demo6
