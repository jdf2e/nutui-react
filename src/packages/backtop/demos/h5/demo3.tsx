import React from 'react'
import { Top } from '@nutui/icons-react'
import { BackTop, Cell } from '@nutui/nutui-react'

const Demo3 = () => {
  return (
    <div id="target" style={{ height: '100vh' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop threshold={100} target="target">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Top width={12} height={12} />
          <div style={{ fontSize: '12px' }}>顶部</div>
        </div>
      </BackTop>
    </div>
  )
}
export default Demo3
