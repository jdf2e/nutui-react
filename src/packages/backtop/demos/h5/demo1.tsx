import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <div id="target" style={{ height: '100vh' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop target="target" />
    </div>
  )
}
export default Demo1
