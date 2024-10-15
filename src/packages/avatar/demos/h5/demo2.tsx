import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo2 = () => {
  return (
    <Cell>
      <Avatar icon={<User />} shape="square" />
      <Avatar icon={<User />} shape="round" />
    </Cell>
  )
}
export default Demo2
