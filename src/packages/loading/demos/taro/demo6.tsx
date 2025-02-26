import React from 'react'
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingTextColor: '#396aca' }}>
        <Loading>加载中</Loading>
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingFontSize: '20px' }}>
        <Loading>加载中</Loading>
      </ConfigProvider>
    </Cell>
  )
}
export default Demo6
