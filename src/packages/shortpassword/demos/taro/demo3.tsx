import React, { useState } from 'react'
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'

const Demo3 = () => {
  const [visible3, setVisible3] = useState(false)
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
      <Cell title="显示按钮组" onClick={() => setVisible3(true)} />
      <ShortPassword
        visible={visible3}
        value={value}
        tips={
          <>
            <Star size={11} />
            自定义提示语
          </>
        }
        hideFooter={false}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible3(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        onConfirm={() => setVisible3(false)}
        onCancel={() => setVisible3(false)}
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
export default Demo3
