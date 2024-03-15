import React from 'react'
import { Switch } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <Switch
      defaultChecked
      style={{
        '--nutui-switch-open-background-color': 'blue',
        '--nutui-switch-close-line-background-color': '#ebebeb',
      }}
    />
  )
}
export default Demo5
