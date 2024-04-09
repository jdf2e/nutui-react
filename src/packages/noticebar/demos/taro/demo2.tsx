import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'
import { ArrowRight } from '@nutui/icons-react-taro'

const Demo2 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const textShort = 'NutUI-React 是移动端组件库'
  return (
    <>
      <NoticeBar
        content={text}
        align="center"
        wrap
        rightIcon={<ArrowRight />}
      />
      <br />
      <NoticeBar content={text} align="center" rightIcon={<ArrowRight />} />
      <br />
      <NoticeBar
        content={textShort}
        align="center"
        rightIcon={<ArrowRight />}
      />
    </>
  )
}
export default Demo2
