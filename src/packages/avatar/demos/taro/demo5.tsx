import React from 'react'
import { Avatar, Badge } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'

const Demo5 = () => {
  return (
    <>
      <Badge value="8">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </>
  )
}
export default Demo5
