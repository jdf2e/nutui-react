/**
 * 自定义层级
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Cart } from '@nutui/icons-react-taro'
import { pxTransform } from '@tarojs/taro'

const App = () => {
  return (
    <View>
      <HoverButton icon={<Cart />} zIndex={11} />
      <View
        style={{
          zIndex: 10,
          position: 'fixed',
          width: '100%',
          height: pxTransform(50),
          left: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        这个图层层级为 10
      </View>
    </View>
  )
}
export default App
