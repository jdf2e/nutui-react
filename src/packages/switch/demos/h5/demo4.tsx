import React from 'react'
import { Cell, Switch, Space } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <Cell>
      <Space>
        <Switch defaultChecked activeText="开启" inactiveText="关闭" />
        <Switch defaultChecked activeText="开" inactiveText="关" />
        <Switch defaultChecked activeText="开启" inactiveText="关闭" disabled />
        <Switch activeText="开启" inactiveText="关闭" disabled />
      </Space>
    </Cell>
  )
}
export default Demo4
