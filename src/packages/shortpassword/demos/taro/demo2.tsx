import React, { useState } from 'react'
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [visible2, setVisible2] = useState(false)
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
      <Cell title="显示明文" onClick={() => setVisible2(true)} />
      <ShortPassword
        visible={visible2}
        value={value}
        plain
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible2(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        onComplete={() => setVisible(false)}
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
export default Demo2
