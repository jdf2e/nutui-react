import React, { useState } from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react'

const Demo2 = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)

  const onChangeAsync = async (value: boolean) => {
    Toast.show(`2秒后异步触发 ${value}`)
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
    if (!res) {
      // 主动抛出一个错误，用于中断loading态
      throw new Error()
    } else {
      setCheckedAsync(value)
    }
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
