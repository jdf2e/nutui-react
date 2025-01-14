import React, { useState } from 'react'
import { Button, Cell, Overlay } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo6 = ({ t }: propsType) => {
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
      <Cell>
        <Button type="primary" onClick={handleToggleShow}>
          {t.closeOnOverlayClick}
        </Button>
      </Cell>
      <Overlay visible={visible} closeOnOverlayClick={false}>
        <div style={wrapperStyle}>
          <div style={contentStyle} onClick={onClose}>
            {t.customContent}
          </div>
        </div>
      </Overlay>
    </>
  )
}

export default withTranslation(Demo6)
