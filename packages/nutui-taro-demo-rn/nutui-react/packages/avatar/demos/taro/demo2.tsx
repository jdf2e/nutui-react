import React from 'react'
import { Avatar } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'

const Demo2 = () => {
  return (
    <>
      <Avatar icon={<User />} shape="square" />
      <Avatar icon={<User />} shape="round" />
    </>
  )
}
export default Demo2
