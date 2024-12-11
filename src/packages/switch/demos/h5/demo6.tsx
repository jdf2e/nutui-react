import React from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react'

const Demo6 = () => {
  const onChange = (value: boolean, event: any) => {
    Toast.show(`触发了onChange事件，开关状态：${value}`)
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
export default Demo6
