import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo4 = () => {
  const styles = { marginRight: '30px' }
  return (
    <Cell>
      <Avatar
        color="#fff"
        background="var(--nutui-color-primary)"
        icon={<User />}
        style={styles}
      />
      <Avatar
        color="var(--nutui-color-primary)"
        background="var(--nutui-color-primary-light-pressed)"
      >
        U
      </Avatar>
    </Cell>
  )
}
export default Demo4
