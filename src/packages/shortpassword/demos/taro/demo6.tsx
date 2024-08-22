import React, { useState } from 'react'
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [visible6, setVisible6] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="自动聚焦" onClick={() => setVisible6(true)} />
      <ShortPassword
        visible={visible6}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible6(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        onComplete={() => setVisible(false)}
        autoFocus
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default Demo6
