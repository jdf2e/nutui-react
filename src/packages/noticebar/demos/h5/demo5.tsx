import React from 'react'
import { NoticeBar } from '@nutui/nutui-react'

const Demo5 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  return <NoticeBar content={text} wrap />
}
export default Demo5
