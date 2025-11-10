import React from 'react'
import { NoticeBar, Button } from '@nutui/nutui-react'
import { ArrowRight } from '@nutui/icons-react'

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
      <br />
      <NoticeBar
        content={text}
        align="center"
        wrap
        rightIcon={<ArrowRight />}
        rightIconAriaLabel="more"
      />
      <br />
      <NoticeBar
        content={text}
        wrap
        closeable
        right={
          <>
            <Button size="small" color="#d9500b" fill="outline">
              一键清理
            </Button>
          </>
        }
      />
      <br />
    </>
  )
}
export default Demo1
