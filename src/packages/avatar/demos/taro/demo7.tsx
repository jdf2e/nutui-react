import React from 'react'
import { Avatar } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'

const Demo7 = () => {
  return (
    <>
      <Avatar.Group max="3" level="right" maxContent="...">
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
    </>
  )
}
export default Demo7
