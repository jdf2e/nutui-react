import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo3 = () => {
  const styles = { marginRight: '30px' }
  return (
    <Cell>
      <Avatar
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        style={styles}
      />
      <Avatar icon={<User />} style={styles} />
      <Avatar>N</Avatar>
    </Cell>
  )
}
export default Demo3
