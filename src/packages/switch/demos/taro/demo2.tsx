import React, { useState } from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  const [value, setValue] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const onChangeAsync = async (value: boolean) => {
    setValue(value)
    setShowToast(true)
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
    if (!res) {
      // 主动抛出一个错误对象，用于中断组件 loading 态
      throw new Error()
    } else {
      setCheckedAsync(value)
    }
  }
  return (
    <>
      <Cell>
        <Switch
          checked={checkedAsync}
          onChange={(value) => onChangeAsync(value)}
        />
      </Cell>
      <Toast
        content={`2秒后异步触发 ${value}`}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
    </>
  )
}
export default Demo2
