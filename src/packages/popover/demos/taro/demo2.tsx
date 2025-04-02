import React, { useState } from 'react'
import { Popover, Button, Space } from '@nutui/nutui-react-taro'
import { Home, Check } from '@nutui/icons-react-taro'

interface List {
  key?: string
  name: string
  icon?: React.ReactNode
  disabled?: boolean
  className?: string
}
const Demo2 = () => {
  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
  const iconItemList = [
    {
      key: 'key1',
      name: '主要文案内容',
      icon: <Home />,
      action: {
        icon: <Check />,
        onClick: (e: any) => {
          console.log('onclick 1')
          e.stopPropagation()
        },
      },
    },
  ]
  const itemListDisabled = [
    {
      key: 'key1',
      name: '主要文案内容',
      disabled: true,
    },
    {
      key: 'key2',
      name: '主要文案内容',
    },
  ]
  const chooseHandle = (item: List, index: number) => {
    console.log('选择')
  }
  return (
    <Space>
      <Popover
        visible={showIcon}
        theme="dark"
        location="bottom-left"
        onClick={() => {
          showIcon ? setShowIcon(false) : setShowIcon(true)
        }}
        list={iconItemList}
      >
        <Button type="primary">图标选项</Button>
      </Popover>
      <Popover
        visible={disableAction}
        theme="dark"
        onClick={() => {
          disableAction ? setDisableAction(false) : setDisableAction(true)
        }}
        list={itemListDisabled}
        location="right"
        onSelect={chooseHandle}
      >
        <Button type="primary">禁用选项</Button>
      </Popover>
    </Space>
  )
}

export default Demo2
