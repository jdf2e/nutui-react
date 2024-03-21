import React from 'react'
import { Switch } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo4 = () => {
  const onChange = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    Taro.showToast({ title: `触发了onChange事件，开关状态：${value}` })
  }
  return (
    <>
      <Switch
        defaultChecked
        onChange={(value, event) => onChange(value, event)}
      />
    </>
  )
}
export default Demo4
