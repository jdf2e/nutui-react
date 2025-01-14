import React, { useState } from 'react'
import { Button, Cell, Overlay } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo5 = ({ t }: propsType) => {
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
        <Button type="success" onClick={handleToggleShow}>
          {t.nestedConetnt}
        </Button>
      </Cell>
      <Overlay visible={visible} onClick={onClose}>
        <div style={wrapperStyle}>
          <div style={contentStyle}>{t.customContent}</div>
        </div>
      </Overlay>
    </>
  )
}

export default withTranslation(Demo5)
