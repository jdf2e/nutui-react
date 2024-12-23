import { User } from '@nutui/icons-react'
import { Avatar, Badge, Cell, ConfigProvider } from '@nutui/nutui-react'
import React from 'react'

const customTheme = {
  nutuiBadgeBorderRadius: '12px 12px 12px 0',
}

const Demo5 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge dot size="small">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge dot size="normal">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <ConfigProvider theme={customTheme}>
        <Badge value="内容">
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </ConfigProvider>
    </Cell>
  )
}
export default Demo5
