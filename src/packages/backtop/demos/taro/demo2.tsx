import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop threshold={200} />
    </>
  )
}
export default Demo2
