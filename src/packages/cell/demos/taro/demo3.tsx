import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'

const Demo3 = () => {
  return (
    <Cell
      title={
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <User />
          <span style={{ marginLeft: '5px' }}>我是标题</span>
        </div>
      }
      description={
        <span>
          我是描述<b style={{ color: 'red' }}>1</b>
        </span>
      }
      extra="描述文字"
    />
  )
}
export default Demo3
