import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import '../../demo.scss'

const Demo3 = () => {
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell>
        <View className="nut-overlay-text" onClick={handleToggleShow}>
          设置动画时间
        </View>
      </Cell>

      <Overlay
        visible={visible}
        onClick={onClose}
        style={{ '--nutui-overlay-animation-duration': '2.5s' }}
        duration={2500}
        afterShow={() => {
          console.log('afterShow')
        }}
        afterClose={() => {
          console.log('afterClose')
        }}
      />
    </>
  )
}
export default Demo3
