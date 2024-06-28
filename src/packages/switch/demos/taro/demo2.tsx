import React, { useState } from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo2 = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)

  const onChangeAsync = (value: boolean, event: any) => {
    Taro.showToast({ title: `2秒后异步触发 ${value}` })
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <Cell>
      <Switch
        checked={checkedAsync}
        onChange={(value, event) => onChangeAsync(value, event)}
      />
    </Cell>
  )
}
export default Demo2
