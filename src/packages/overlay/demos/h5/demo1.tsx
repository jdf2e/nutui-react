import React, { useState } from 'react'
import { Button, Cell, Overlay } from '@nutui/nutui-react'

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
        <Button type="primary" onClick={handleToggleShow}>
          显示遮罩层
        </Button>
      </Cell>
      <Overlay
        visible={visible}
        onClick={onClose}
        zIndex={2020}
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
