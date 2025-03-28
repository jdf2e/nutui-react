import React, { useState } from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react'

const Demo2 = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)

  const mockRequest = (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  const onChangeAsync = async (value: boolean) => {
    Toast.show(`2秒后异步触发 ${value}`)
    await mockRequest()
    setCheckedAsync(value)
  }
  return (
    <Cell>
      <Switch
        checked={checkedAsync}
        onChange={(value) => onChangeAsync(value)}
      />
    </Cell>
  )
}
export default Demo2
