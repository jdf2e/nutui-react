import React from 'react'
import { Space, Button, Cell } from '@nutui/nutui-react'

const Demo6 = () => {
  return (
    <Cell>
      <Space align="end" wrap>
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
export default Demo6
