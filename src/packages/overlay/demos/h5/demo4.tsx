import React, { useState } from 'react'
import { Button, Cell, Overlay } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo4 = ({ t }: propsType) => {
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
          {t.noLockBgScroll}
        </Button>
      </Cell>
      <Overlay visible={visible} onClick={onClose} lockScroll={false} />
    </>
  )
}

export default withTranslation(Demo4)
