import React from 'react'
import { Space, Button } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <Space justify="start" wrap>
      <Button>按钮1</Button>
      <div>
        <Button block style={{ marginBottom: 5 }}>
          按钮2
        </Button>
        <Button block>按钮2</Button>
      </div>
      <div>
        <Button block style={{ marginBottom: 5 }}>
          按钮3
        </Button>
        <Button block style={{ marginBottom: 5 }}>
          按钮3
        </Button>
        <Button block>按钮3</Button>
      </div>
    </Space>
  )
}
export default Demo5
