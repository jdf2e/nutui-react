import React from 'react'
import { NoticeBar, Button } from '@nutui/nutui-react-taro'
import { ArrowRight, Fabulous } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const textShort = 'NutUI 是京东风格的移动端组件库'
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
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
      <NoticeBar
        className="custom"
        direction="vertical"
        list={horseLamp1}
        speed={10}
        duration={1000}
        onItemClick={(e, v) => {
          console.log('onclick-custom', v)
        }}
        rightIcon={<Fabulous width={16} height={16} color="#f0250f" />}
        rightIconAriaLabel="bang"
      />
      <br />
    </>
  )
}
export default Demo1
