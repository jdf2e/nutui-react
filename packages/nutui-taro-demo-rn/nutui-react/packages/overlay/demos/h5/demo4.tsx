import React, { useState } from 'react'
import { Button, Overlay } from '@nutui/nutui-react'

const Demo4 = () => {
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
        不锁定背景滚动
      </Button>
      <Overlay visible={visible} onClick={onClose} lockScroll={false} />
    </>
  )
}
export default Demo4
