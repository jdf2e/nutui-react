import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo4 = () => {
  const onChange = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    Taro.showToast({ title: `触发了onChange事件，开关状态：${value}` })
  }
  return (
    <Cell>
      <Switch
        defaultChecked
        onChange={(value, event) => onChange(value, event)}
      />
    </Cell>
  )
}
export default Demo4
