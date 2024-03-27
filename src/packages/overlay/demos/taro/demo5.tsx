import React, { useState } from 'react'
import { Button, Cell, Overlay } from '@nutui/nutui-react-taro'

const Demo5 = () => {
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
        <Button type="success" onClick={handleToggleShow}>
          嵌套内容
        </Button>
      </Cell>

      <Overlay visible={visible} onClick={onClose}>
        <div
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '200px',
              height: '200px',
              background: '#fff',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            这里是正文
          </div>
        </div>
      </Overlay>
    </>
  )
}
export default Demo5
