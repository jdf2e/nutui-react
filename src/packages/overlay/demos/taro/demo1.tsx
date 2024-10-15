import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
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
        <View onClick={handleToggleShow}>点击按钮显示遮罩层</View>
      </Cell>

      <Overlay
        visible={visible}
        onClick={onClose}
        style={{ '--nutui-overlay-zIndex': 2020 }}
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
export default Demo1
