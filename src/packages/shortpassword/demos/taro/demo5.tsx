import React, { useState } from 'react'
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo5 = () => {
  const [visible5, setVisible5] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  const onTips = () => {
    Taro.showToast({ title: '忘记密码提示语事件回调' })
  }
  return (
    <>
      <Cell title="忘记密码提示语事件回调" onClick={() => setVisible5(true)} />
      <ShortPassword
        visible={visible5}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible5(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        onComplete={() => setVisible(false)}
        onTips={() => onTips()}
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
export default Demo5
