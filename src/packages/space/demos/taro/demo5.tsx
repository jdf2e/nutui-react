import React from 'react'
import { Space, Button, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <Space justify="start" wrap>
        <Button>按钮1</Button>
        <Space direction="vertical">
          <Button>按钮2</Button>
          <Button>按钮2</Button>
        </Space>
        <Space direction="vertical">
          <Button>按钮3</Button>
          <Button>按钮3</Button>
          <Button>按钮3</Button>
        </Space>
      </Space>
    </Cell>
  )
}
export default Demo5
