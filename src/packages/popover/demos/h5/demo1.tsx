import React, { useState } from 'react'
import { Popover, Button, Space } from '@nutui/nutui-react'
import { Tips, Close } from '@nutui/icons-react'

const Demo1 = () => {
  const [basic, setBasic] = useState(false)
  const [dark, setDark] = useState(false)

  const itemList = [
    {
      key: 'key1',
      name: '主要文案内容',
      icon: <Tips />,
      action: {
        icon: <Close />,
      },
    },
  ]
  return (
    <Space>
      <Popover
        visible={basic}
        list={itemList}
        location="bottom-start"
        style={{ marginInlineEnd: 30 }}
        onClick={() => {
          basic ? setBasic(false) : setBasic(true)
        }}
      >
        <Button type="primary" shape="square">
          明亮风格
        </Button>
      </Popover>
      <Popover
        visible={dark}
        list={itemList}
        theme="dark"
        location="bottom-start"
        onClick={() => {
          dark ? setDark(false) : setDark(true)
        }}
      >
        <Button type="primary" shape="square">
          暗黑风格
        </Button>
      </Popover>
    </Space>
  )
}

export default Demo1
