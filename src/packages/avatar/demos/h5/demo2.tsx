import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo2 = () => {
  const styles = { marginRight: '30px' }
  return (
    <Cell>
      <Avatar icon={<User />} shape="square" style={styles} />
      <Avatar icon={<User />} shape="round" />
    </Cell>
  )
}
export default Demo2
