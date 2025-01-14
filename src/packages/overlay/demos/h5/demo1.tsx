import React, { useState } from 'react'
import { Button, Cell, Overlay } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo1 = ({ t }: propsType) => {
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
          {t.showOverlay}
        </Button>
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

export default withTranslation(Demo1)
