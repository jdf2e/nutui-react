import React from 'react'
import { Cell, Loading } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Loading type="circular" />
        <Loading type="spinner" />
      </Cell>
      <Cell>
        <Loading direction="vertical">正在奋力加载中，感谢您的等待</Loading>
      </Cell>
      <Cell>
        <Loading direction="vertical">正在奋力加载中，感谢您的等待</Loading>
      </Cell>
    </>
  )
}
export default Demo1
