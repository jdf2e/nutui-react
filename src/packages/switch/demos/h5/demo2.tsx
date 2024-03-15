import React, { useState } from 'react'
import { Switch, Toast } from '@nutui/nutui-react'

const Demo2 = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)

  const onChangeAsync = (value: boolean, event: any) => {
    Toast.show(`2秒后异步触发 ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <>
      <Switch
        checked={checkedAsync}
        onChange={(value, event) => onChangeAsync(value, event)}
      />
    </>
  )
}
export default Demo2
