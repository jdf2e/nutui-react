import React from 'react'
import {
  HoverButton,
  ConfigProvider,
  pxTransform,
} from '@nutui/nutui-react-taro'
import { Cart } from '@nutui/icons-react-taro'

const customSpacing = {
  nutuiHoverbuttonSpacing: pxTransform(40),
  nutuiHoverbuttonPositionBottom: pxTransform(100),
  nutuiHoverbuttonPositionRight: pxTransform(50),
  nutuiHoverbuttonItemBorderColor: '#FA2C19',
  nutuiHoverbuttonItemBackground: '#FFEAE8',
  nutuiHoverbuttonItemBackgroundActive: '#FEC3BE',
  nutuiHoverbuttonItemIconColor: '#FA2C19',
  nutuiHoverbuttonItemIconColorActive: '#FB5142',
}

const Demo5 = () => {
  return (
    <ConfigProvider theme={customSpacing}>
      <HoverButton icon={<Cart />} />
      <HoverButton icon={<Cart />} />
      <HoverButton icon={<Cart />} />
    </ConfigProvider>
  )
}
export default Demo5
