import React, { useState } from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo2 = (props: { text: string; title: string }) => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  const onChangeAsync = (value: boolean, event: any) => {
    Taro.showToast({ title: `${props.text}${value}` })
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <>
      <h2>{props.title}</h2>
      <Cell>
        <Switch
          checked={checkedAsync}
          onChange={(value, event) => onChangeAsync(value, event)}
        />
      </Cell>
    </>
  )
}
export default Demo2
