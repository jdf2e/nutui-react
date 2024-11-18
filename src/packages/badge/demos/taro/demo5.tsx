import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell, ConfigProvider } from '@nutui/nutui-react-taro'
import React from 'react'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const customTheme = {
  nutuiBadgeBorderRadius: `${pxTransform(12)} ${pxTransform(12)} ${pxTransform(12)} 0`,
}

const customTheme2 = {
  nutuiBadgeDotWidth: pxTransform(14),
  nutuiBadgeDotHeight: pxTransform(14),
  nutuiBadgeBorder: `${pxTransform(2)} solid #000`,
}

const Demo5 = () => {
  const isRnAndHarmony = harmonyAndRn()
  const renderChildren = () => {
    return <Avatar icon={<User />} shape="square" />
  }
  const marginStyles = isRnAndHarmony
    ? { marginRight: pxTransform(40) }
    : { marginInlineEnd: '40px' }
  return (
    <Cell>
      <ConfigProvider theme={customTheme}>
        <Badge style={marginStyles} value="NEW">
          {renderChildren()}
        </Badge>
      </ConfigProvider>

      <ConfigProvider theme={customTheme2}>
        <Badge style={marginStyles} dot top="2">
          {renderChildren()}
        </Badge>
      </ConfigProvider>
    </Cell>
  )
}
export default Demo5
