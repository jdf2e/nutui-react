import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Avatar.Group gap="-4">
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
          <Avatar icon={<User />} />
          <Avatar
            color="var(--nutui-color-primary)"
            background="var(--nutui-brand-2)"
          >
            U
          </Avatar>
        </Avatar.Group>
      </Cell>
      <Cell>
        <Avatar.Group max="3" maxColor="#fff" maxBackground="#498ff2">
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
          <Avatar icon={<User />} />
          <Avatar
            color="var(--nutui-color-primary)"
            background="var(--nutui-brand-2)"
          >
            U
          </Avatar>
          <Avatar icon={<User />} />
        </Avatar.Group>
      </Cell>
    </>
  )
}
export default Demo6
