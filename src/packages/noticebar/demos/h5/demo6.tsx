import React from 'react'
import { NoticeBar, Button } from '@nutui/nutui-react'

const Demo6 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const textShort = 'NutUI 是京东风格的移动端组件库'
  return (
    <>
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
      <NoticeBar
        content={textShort}
        wrap
        closeable
        right={
          <>
            <Button
              size="small"
              color="linear-gradient(90deg, #2B45AC 4.31%, #132D96 94.83%)"
            >
              去开通
            </Button>
          </>
        }
      />
    </>
  )
}
export default Demo6
