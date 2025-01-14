import React, { useState } from 'react'
import { Button, Cell, Overlay } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
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
          {t.customOverlay}
        </Button>
      </Cell>
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

export default withTranslation(Demo2)
