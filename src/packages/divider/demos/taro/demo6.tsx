import React from 'react'
import { Divider } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'

const Demo6 = () => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        文本
        <Divider direction="vertical" />
        <Text style={{ color: '#1989fa' }}>链接</Text>
        <Divider direction="vertical" />
        <Text style={{ color: '#1989fa' }}>链接</Text>
      </View>
    </>
  )
}
export default Demo6
