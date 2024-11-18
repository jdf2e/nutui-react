import React from 'react'
import { Cell, Space, Switch } from '@nutui/nutui-react-taro'
import { Check, Close } from '@nutui/icons-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <Space>
        <Switch
          defaultChecked
          activeText={<Check />}
          inactiveText={<Close />}
        />
        <Switch
          defaultChecked
          activeText={<Check />}
          inactiveText={<Close />}
          disabled
        />
        <Switch activeText={<Check />} inactiveText={<Close />} disabled />
      </Space>
    </Cell>
  )
}
export default Demo5
