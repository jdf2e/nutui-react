import React from 'react'
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge dot fill="outline">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={8} fill="outline">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        value="内容"
        fill="outline"
        style={{
          '--nutui-badge-outline-border': '1px solid blue',
          '--nutui-badge-outline-color': 'blue',
        }}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo8
