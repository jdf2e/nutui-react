import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'
import { Check, Close } from '@nutui/icons-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <Switch defaultChecked activeText={<Check />} inactiveText={<Close />} />
    </Cell>
  )
}
export default Demo5
