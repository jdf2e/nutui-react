import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <div id="target" style={{ height: '800px', overflowY: 'auto' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop target="target" threshold={100} />
    </div>
  )
}
export default Demo4
