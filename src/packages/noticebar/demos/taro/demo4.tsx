import React from 'react'
import { NoticeBar, Image } from '@nutui/nutui-react-taro'
import { Failure } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const hello = () => {
    console.log('hello world')
  }
  return (
    <>
      <NoticeBar closeable onClick={hello}>
        {text}
      </NoticeBar>
      <br />
      <NoticeBar closeable rightIcon={<Failure />} onClick={hello}>
        {text}
      </NoticeBar>
      <br />
      <NoticeBar
        leftIcon={
          <Image
            width="16px"
            height="16px"
            src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
          />
        }
      >
        <a href="https://www.jd.com" style={{ color: '#4d88ff' }}>
          京东商城
        </a>
      </NoticeBar>
    </>
  )
}
export default Demo4
