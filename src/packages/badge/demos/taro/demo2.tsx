import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo2 = () => {
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
      <Badge style={{ marginRight: pxTransform(40) }} value={200} max={9}>
        {renderChildren()}
      </Badge>
      <Badge style={{ marginRight: pxTransform(40) }} value={200} max={20}>
        {renderChildren()}
      </Badge>
      <Badge style={{ marginRight: pxTransform(40) }} value={200} max={99}>
        {renderChildren()}
      </Badge>
    </Cell>
  )
}
export default Demo2
