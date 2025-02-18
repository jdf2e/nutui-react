import { User } from '@nutui/icons-react'
import { Avatar, Badge, Cell } from '@nutui/nutui-react'
import React from 'react'

const Demo1 = () => {
  const renderText = () => {
    return (
      <span
        style={{
          lineHeight: '16px',
        }}
      >
        文字内容
      </span>
    )
  }
  return (
    <>
      <Cell align="center" style={{ justifyContent: 'space-around' }}>
        <Badge dot>{renderText()}</Badge>
        <Badge dot>
          <User height={22} width={22} />
        </Badge>
        <Badge dot>
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </Cell>
      <Cell align="center" style={{ justifyContent: 'space-around' }}>
        <Badge value={8}>{renderText()}</Badge>
        <Badge value={8}>
          <User height={22} width={22} />
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
          <User height={22} width={22} />
        </Badge>
        <Badge value="内容">
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </Cell>
    </>
  )
}
export default Demo1
