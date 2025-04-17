import React, { useState } from 'react'
import { Popover, Button, Space } from '@nutui/nutui-react'
import { Tips, Close } from '@nutui/icons-react'

const Demo = () => {
  const [basic, setBasic] = useState(false)
  const [dark, setDark] = useState(false)
  const [index, setIndex] = useState(0)
  const itemList = [
    {
      key: 'key1',
      name: '主要文案内容',
      icon: <Tips />,
      action: {
        icon: <Close />,
        onClick: (e: any) => {
          e.stopPropagation()
          index === 0 && basic && setBasic(false)
          index === 1 && dark && setDark(false)
        },
      },
    },
  ]
  return (
    <Space>
      <Popover
        visible={basic}
        list={itemList}
        location="bottom-left"
        onClick={() => {
          basic ? setBasic(false) : setBasic(true)
          setIndex(0)
        }}
        onOpen={() => {
          console.log('打开菜单时触发')
        }}
        onClose={() => {
          console.log('关闭菜单时触发')
        }}
      >
        <Button type="primary">明亮风格</Button>
      </Popover>
      <Popover
        visible={dark}
        list={itemList}
        theme="dark"
        location="bottom-left"
        onClick={() => {
          dark ? setDark(false) : setDark(true)
          setIndex(1)
        }}
      >
        <Button type="primary">暗黑风格</Button>
      </Popover>
    </Space>
  )
}

export default Demo
