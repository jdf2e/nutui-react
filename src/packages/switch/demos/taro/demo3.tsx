import React from 'react'
import { Cell, Switch, Space } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Cell>
      <Space>
        <Switch defaultChecked disabled />
        <Switch disabled />
      </Space>
    </Cell>
  )
}
export default Demo3
