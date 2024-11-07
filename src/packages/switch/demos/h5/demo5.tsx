import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react'
import { Check, Close } from '@nutui/icons-react'

const Demo5 = () => {
  return (
    <Cell>
      <Switch defaultChecked activeText={<Check />} inactiveText={<Close />} />
    </Cell>
  )
}
export default Demo5
