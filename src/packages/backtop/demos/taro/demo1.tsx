import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react-taro'
import { Top } from '@nutui/icons-react-taro'

const Demo1 = () => {
  return (
    <div>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop
        threshold={200}
        style={{
          bottom: '50px',
          insetInlineEnd: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Top size={12} />
          <div style={{ fontSize: '12px' }}>顶部</div>
        </div>
      </BackTop>
    </div>
  )
}
export default Demo1
