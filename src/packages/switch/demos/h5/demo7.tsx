import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react'

const Demo7 = () => {
  return (
    <Cell>
      <Switch
        defaultChecked
        style={{
          '--nutui-switch-open-background-color': 'blue',
          '--nutui-switch-close-line-background-color': '#ebebeb',
        }}
      />
    </Cell>
  )
}
export default Demo7
