import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <Divider
        style={{
          color: '#0073ff',
          paddingLeft: 16,
          paddingRight: 16,
          borderColor: '#0073ff',
          borderStyle: 'dashed',
        }}
      >
        文本
      </Divider>
    </Cell>
  )
}
export default Demo5
