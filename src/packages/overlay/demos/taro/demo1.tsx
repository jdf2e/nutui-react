import React, { useState } from 'react'
import { Button, Overlay } from '@nutui/nutui-react-taro'

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
      <Button type="primary" onClick={handleToggleShow}>
        显示遮罩层
      </Button>
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
