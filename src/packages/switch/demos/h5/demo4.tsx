import React from 'react'
import { Switch, Toast } from '@nutui/nutui-react'

const Demo4 = () => {
  const onChange = (value: boolean, event: any) => {
    Toast.show(`触发了onChange事件，开关状态：${value}`)
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
