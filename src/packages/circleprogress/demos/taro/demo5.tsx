import React from 'react'
import { View } from '@tarojs/components'
import { CircleProgress } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        <View>3000</View>
        <View style={{ fontSize: '12px', color: 'var(--nutui-black-10)' }}>
          步
        </View>
      </CircleProgress>
    </>
  )
}
export default Demo5
