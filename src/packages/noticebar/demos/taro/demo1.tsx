import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const textShort = 'NutUI 是京东风格的移动端组件库'
  return (
    <>
      <NoticeBar content={text} />
      <br />
      <NoticeBar
        content={textShort}
        leftIcon={null}
        scrollable={false}
        closeable
      />
    </>
  )
}
export default Demo1
