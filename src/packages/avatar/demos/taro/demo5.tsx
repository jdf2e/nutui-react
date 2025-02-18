import React from 'react'
// import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import { Avatar, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import { harmony } from '@/utils/platform-taro'

const Demo5 = () => {
  return (
    <Cell className="cell-avatar">
      {harmony() ? null : (
        <>
          {/* <Badge value="8"> */}
          <Avatar icon={<User />} shape="square" />
          {/* </Badge> */}
          {/* <Badge dot> */}
          <Avatar icon={<User />} shape="square" />
          {/* </Badge> */}
        </>
      )}
    </Cell>
  )
}
export default Demo5
