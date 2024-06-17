import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        {harmonyAndRn() ? (
          <Avatar.Group gap="-4">
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#eee' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#eee' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#dce9ff' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
          </Avatar.Group>
        ) : (
          <Avatar.Group gap="-4">
            <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar icon={<User />} />
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#eee' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
          </Avatar.Group>
        )}
      </Cell>
      <Cell>
        {harmonyAndRn() ? (
          <Avatar.Group max="3" maxColor="#fff" maxBackground="#498ff2">
            <Avatar size="normal">N</Avatar>
            <Avatar size="normal">N</Avatar>
            <Avatar size="normal">N</Avatar>
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#dce9ff' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
          </Avatar.Group>
        ) : (
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
        )}
      </Cell>
    </>
  )
}
export default Demo6
