import React from 'react'
import { Cell, Switch, Space } from '@nutui/nutui-react'

const Demo8 = () => {
  return (
    <Cell>
      <Space>
        <Switch loading />
        <Switch loading defaultChecked />
      </Space>
    </Cell>
  )
}
export default Demo8
