/**
 * 自定义层级
 */
import React from 'react'
import { HoverButton, SafeArea } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Cart } from '@nutui/icons-react-taro'
import { pxTransform } from '@tarojs/taro'

const App = () => {
  return (
    <View>
      <HoverButton icon={<Cart />} zIndex={101} />
      <View
        style={{
          zIndex: 100,
          position: 'fixed',
          width: '100%',
          left: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <View style={{ height: pxTransform(60) }}>这个图层层级为 100</View>
        <SafeArea position="bottom" />
      </View>
    </View>
  )
}
export default App
