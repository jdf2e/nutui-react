import React, { useState } from 'react'
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react'

const Demo6 = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`enter:${number}`)
  }
  const onDelete = () => {
    Toast.show('delete')
  }
  return (
    <>
      <Cell title="透传 Popup 属性" onClick={() => setVisible(true)} />
      <NumberKeyboard
        visible={visible}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
        duration={1}
        overlayClassName="number-keyboard-overlay"
        onOpen={() => {
          Toast.show('onOpen')
        }}
      />
    </>
  )
}
export default Demo6
