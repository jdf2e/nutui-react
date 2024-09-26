import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo3 = () => {
  const isRnAndHarmony = harmonyAndRn()
  const renderChildren = () => {
    return (
      <>
        {isRnAndHarmony ? (
          <Avatar shape="square">N</Avatar>
        ) : (
          <Avatar icon={<User />} shape="square" />
        )}
      </>
    )
  }
  return (
    <Cell>
      <Badge
        style={{ marginRight: pxTransform(40) }}
        value={8}
        color="rgba(73,143,242,1)"
      >
        {renderChildren()}
      </Badge>
      <Badge
        style={{ marginRight: pxTransform(40) }}
        value={76}
        color="rgba(73,143,242,1)"
      >
        {renderChildren()}
      </Badge>
      <Badge
        style={{ marginRight: pxTransform(40) }}
        value="NEW"
        color="rgba(73,143,242,1)"
      >
        {renderChildren()}
      </Badge>
      <Badge
        style={{ marginRight: pxTransform(40) }}
        top="2"
        right="4"
        dot
        color="rgba(73,143,242,1)"
      >
        {renderChildren()}
      </Badge>
    </Cell>
  )
}
export default Demo3
