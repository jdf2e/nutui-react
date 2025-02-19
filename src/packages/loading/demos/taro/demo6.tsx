import React from 'react'
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <Cell>
      <ConfigProvider>
        <Loading color="#396aca">加载中</Loading>
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingTextSize: '20px' }}>
        <Loading>加载中</Loading>
      </ConfigProvider>
    </Cell>
  )
}
export default Demo6
