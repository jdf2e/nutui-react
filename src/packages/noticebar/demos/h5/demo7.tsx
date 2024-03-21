import React from 'react'
import { NoticeBar, ConfigProvider } from '@nutui/nutui-react'

const Demo7 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  return (
    <ConfigProvider
      theme={{
        nutuiNoticebarBackground: '#EDF4FF',
        nutuiNoticebarColor: '#3768FA',
      }}
    >
      <NoticeBar content={text} />
    </ConfigProvider>
  )
}
export default Demo7
