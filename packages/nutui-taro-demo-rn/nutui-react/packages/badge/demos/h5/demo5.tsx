import { User } from '@nutui/icons-react'
import { Avatar, Badge, Cell, ConfigProvider } from '@nutui/nutui-react'
import React from 'react'

const customTheme = {
  nutuiBadgeBorderRadius: '12px 12px 12px 0',
}

const customTheme2 = {
  nutuiBadgeDotWidth: '14px',
  nutuiBadgeDotHeight: '14px',
  nutuiBadgeBorder: '2px solid #fff',
}

const Demo5 = () => {
  return (
    <Cell>
      <ConfigProvider theme={customTheme}>
        <Badge style={{ marginInlineEnd: '40px' }} value="NEW">
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </ConfigProvider>

      <ConfigProvider theme={customTheme2}>
        <Badge style={{ marginInlineEnd: '40px' }} dot top="2" right="8">
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </ConfigProvider>
    </Cell>
  )
}
export default Demo5
