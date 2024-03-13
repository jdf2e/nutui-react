import React, { useState } from 'react'
import { Button, Overlay } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [visible, setVisible] = useState(false)

  const wrapperStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const contentStyle = {
    display: 'flex',
    width: '150px',
    height: '150px',
    background: '#fff',
    borderRadius: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  }
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Button type="success" onClick={handleToggleShow}>
        嵌套内容
      </Button>
      <Overlay visible={visible} onClick={onClose}>
        <div style={wrapperStyle}>
          <div style={contentStyle}>这里是正文</div>
        </div>
      </Overlay>
    </>
  )
}
export default Demo5
