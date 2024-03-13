import React, { useState } from 'react'
import { Button, Overlay } from '@nutui/nutui-react'

const Demo2 = () => {
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
        自定义遮罩样式
      </Button>
      <Overlay
        visible={visible}
        onClick={onClose}
        style={{
          backgroundColor: 'rgba(0, 0, 0, .4)',
          '--nutui-overlay-zIndex': 2000,
        }}
      />
    </>
  )
}
export default Demo2
