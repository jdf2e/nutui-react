import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo8 = () => {
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
      <Badge style={{ marginRight: pxTransform(40) }} value={8} color="green">
        {renderChildren()}
      </Badge>
      <Badge style={{ marginRight: pxTransform(40) }} value={76} fill="outline">
        {renderChildren()}
      </Badge>
      <Badge
        style={{ marginRight: pxTransform(40) }}
        value="NEW"
        color="blue"
        fill="outline"
      >
        {renderChildren()}
      </Badge>
    </Cell>
  )
}
export default Demo8
