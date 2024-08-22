import React from 'react'
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingIconSize: '20px' }}>
        <Loading type="circular" />
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingIconSize: '28px' }}>
        <Loading type="spinner" />
      </ConfigProvider>
    </Cell>
  )
}
export default Demo3
