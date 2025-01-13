/**
 * 自定义层级
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View
          style={{
            height: pxTransform(60),
            display: 'flex',
            justifyContent: 'center',
            color: '#FFFFFF',
          }}
        >
          <Text style={{ color: '#FFFFFF' }}>这个图层层级为 1000</Text>
        </View>
      </View>
    </View>
  )
}
export default App
