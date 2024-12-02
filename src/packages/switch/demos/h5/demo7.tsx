import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react'

const Demo7 = () => {
  return (
    <Cell>
      <Switch
        defaultChecked
        style={{
          '--nutui-switch-active-background-color': 'blue',
          '--nutui-switch-inactive-line-background-color': '#ebebeb',
        }}
      />
    </Cell>
  )
}
export default Demo7
