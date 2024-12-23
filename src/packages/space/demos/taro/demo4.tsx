import React from 'react'
import { Space, Button, ConfigProvider, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Cell>
      <ConfigProvider
        theme={{
          nutuiSpaceGap: '20px',
        }}
      >
        <Space direction="vertical">
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </ConfigProvider>
    </Cell>
  )
}
export default Demo4
