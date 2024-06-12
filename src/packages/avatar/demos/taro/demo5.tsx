import React from 'react'
import { Avatar, Badge } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo5 = () => {
  return (
    <>
      {harmonyAndRn() ? null : (
        <>
          <Badge value="8">
            <Avatar icon={<User />} shape="square" />
          </Badge>
          <Badge dot>
            <Avatar icon={<User />} shape="square" />
          </Badge>
        </>
      )}
    </>
  )
}
export default Demo5
