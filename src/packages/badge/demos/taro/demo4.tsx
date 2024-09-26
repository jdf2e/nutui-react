import { Checklist, User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'
import { Icon } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo4 = () => {
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

  const renderIcon = () => {
    return (
      <>
        {isRnAndHarmony ? (
          <Icon type="success_no_circle" size={12} color="#FFFFFF" />
        ) : (
          <Checklist color="#fff" size={12} />
        )}
      </>
    )
  }
  return (
    <Cell>
      <Badge style={{ marginRight: pxTransform(40) }} value={renderIcon()}>
        {renderChildren()}
      </Badge>
      {/* <Badge
        style={{ margin : '0 20px' }}
        value={<LinkIcon color="#fff" />}
      >
        {renderChildren()}
      </Badge>
      <Badge
        style={{ margin : '0 20px' }}
        value={<Download color="#fff" />}
      >
        {renderChildren()}
      </Badge> */}
    </Cell>
  )
}
export default Demo4
