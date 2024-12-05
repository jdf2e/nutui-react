import React, { useState } from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  const [value, setValue] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const onChangeAsync = (value: boolean, event: any) => {
    setValue(value)
    setShowToast(true)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <>
      <Cell>
        <Switch
          checked={checkedAsync}
          onChange={(value, event) => onChangeAsync(value, event)}
        />
      </Cell>
      <Toast
        type="text"
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
