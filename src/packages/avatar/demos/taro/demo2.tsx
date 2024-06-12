import React from 'react'
import { Avatar } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo2 = () => {
  return (
    <>
      {harmonyAndRn() ? (
        <>
          <Avatar shape="square">N</Avatar>
          <Avatar shape="round">N</Avatar>
        </>
      ) : (
        <>
          <Avatar icon={<User />} shape="square" />
          <Avatar icon={<User />} shape="round" />
        </>
      )}
    </>
  )
}
export default Demo2
