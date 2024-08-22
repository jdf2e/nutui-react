import React from 'react'
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingIconColor: '#fa2c19' }}>
        <Loading type="circular" />
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingIconColor: '#396aca' }}>
        <Loading type="spinner" />
      </ConfigProvider>
    </Cell>
  )
}
export default Demo2
