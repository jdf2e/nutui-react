import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Avatar.Group gap="-4">
          {harmonyAndRn() ? null : (
            <>
              <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
              <Avatar icon={<User />} />
            </>
          )}
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
          {harmonyAndRn() ? (
            <>
              <Avatar size="normal">N</Avatar>
              <Avatar size="normal">N</Avatar>
              <Avatar size="normal">N</Avatar>
            </>
          ) : (
            <>
              <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
              <Avatar icon={<User />} />
            </>
          )}
          <Avatar
            color="var(--nutui-color-primary)"
            background="var(--nutui-brand-2)"
          >
            U
          </Avatar>
          {harmonyAndRn() ? null : (
            <>
              <Avatar icon={<User />} />
            </>
          )}
        </Avatar.Group>
      </Cell>
    </>
  )
}
export default Demo6
