import React, { useState } from 'react'
import { Popover, Button, Space } from '@nutui/nutui-react-taro'
import { Tips, Close } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const [basic, setBasic] = useState(false)
  const [dark, setDark] = useState(false)
  const itemList = [
    {
      key: 'key1',
      name: 'option1',
      icon: <Tips />,
      action: {
        icon: <Close />,
        onClick: (e: any) => {
          console.log('onclick 1')
          e.stopPropagation()
        },
      },
    },
  ]
  return (
    <Space>
      <Popover
        visible={basic}
        list={itemList}
        location="bottom-start"
        style={{ marginInlineEnd: '30px' }}
        onClick={() => {
          basic ? setBasic(false) : setBasic(true)
        }}
        onOpen={() => {
          console.log('打开菜单时触发')
        }}
        onClose={() => {
          console.log('关闭菜单时触发')
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
        style={{ marginInlineEnd: '30px' }}
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
