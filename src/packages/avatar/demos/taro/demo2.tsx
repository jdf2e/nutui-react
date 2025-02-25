import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'

const Demo2 = () => {
  const styles = { marginRight: 30 }
  return (
    <Cell className="cell-avatar">
      <Avatar icon={<User />} shape="square" style={styles} />
      <Avatar icon={<User />} shape="round" />
    </Cell>
  )
}
export default Demo2
