import { ArrowRight, User } from '@nutui/icons-react-taro'
import { Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo3 = () => {
  return (
    <Cell.Group>
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
        extra={<ArrowRight size={14} />}
      />

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
        extra={<ArrowRight size={14} />}
      />
    </Cell.Group>
  )
}
export default Demo3
