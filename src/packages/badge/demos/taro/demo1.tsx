import React from 'react'
import { Dongdong, User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  const renderText = () => {
    return (
      <Text
        style={{
          lineHeight: pxTransform(16),
        }}
      >
        文字内容
      </Text>
    )
  }
  return (
    <>
      <Cell align="center" style={{ justifyContent: 'space-around' }}>
        <Badge dot>{renderText()}</Badge>
        <Badge dot>
          <Dongdong height={22} width={22} />
        </Badge>
        <Badge dot>
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </Cell>
      <Cell align="center" style={{ justifyContent: 'space-around' }}>
        <Badge value={8}>{renderText()}</Badge>
        <Badge value={8}>
          <Dongdong height={22} width={22} />
        </Badge>
        <Badge value={8}>
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </Cell>
      <Cell align="center" style={{ justifyContent: 'space-around' }}>
        <Badge value="内容" right={-2}>
          {renderText()}
        </Badge>
        <Badge value="内容">
          <Dongdong height={22} width={22} />
        </Badge>
        <Badge value="内容">
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </Cell>
    </>
  )
}
export default Demo1
