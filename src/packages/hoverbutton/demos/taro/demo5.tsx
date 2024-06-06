import React from 'react'
import { HoverButton, ConfigProvider } from '@nutui/nutui-react-taro'
import { Cart } from '@nutui/icons-react-taro'

const customSpacing = {
  nutuiHoverbuttonSpacing: '40px',
  nutuiHoverbuttonPositionBottom: '100px',
  nutuiHoverbuttonPositionRight: '50px',
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
