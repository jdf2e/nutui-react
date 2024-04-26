import React, { useState } from 'react'
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react'

const Demo1 = () => {
  const [visible1, setVisible1] = useState(false)
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
      <Cell title="基础用法" onClick={() => setVisible1(true)} />
      <ShortPassword
        visible={visible1}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible1(false)
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
export default Demo1
