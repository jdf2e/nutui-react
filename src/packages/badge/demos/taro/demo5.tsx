import React from 'react'
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell, ConfigProvider } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const customTheme = {
  nutuiBadgeBorderRadius: `${pxTransform(12)} ${pxTransform(12)} ${pxTransform(12)} 0`,
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
