import React from 'react'
import { Space, Button, Cell } from '@nutui/nutui-react'

const Demo6 = () => {
  return (
    <Cell>
      <Space align="end" wrap>
        <Button>按钮1</Button>
        <div>
          <Button style={{ marginBottom: 5 }}>按钮2</Button>
          <Button>按钮2</Button>
        </div>
        <div>
          <Button style={{ marginBottom: 5 }}>按钮3</Button>
          <Button style={{ marginBottom: 5 }}>按钮3</Button>
          <Button>按钮3</Button>
        </div>
      </Space>
    </Cell>
  )
}
export default Demo6
