import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react-taro'
import { Home, Cart, Location, Checklist } from '@nutui/icons-react-taro'

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
      name: 'option1',
      icon: <Home color="rgba(250, 44, 25, 1)" />,
      action: {
        icon: <Checklist color="rgba(250, 44, 25, 1)" />,
        onClick: (e: any) => {
          console.log('onclick 1')
          e.stopPropagation()
        },
      },
    },
    {
      key: 'key2',
      name: 'option2',
      icon: <Cart />,
    },
    {
      key: 'key3',
      name: 'option3',
      icon: <Location />,
    },
  ]
  const itemListDisabled = [
    {
      key: 'key1',
      name: 'option1',
      disabled: true,
    },
    {
      key: 'key2',
      name: 'option2',
      disabled: true,
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ]
  const chooseHandle = (item: List, index: number) => {
    console.log('选择')
  }
  return (
    <>
      <Popover
        className="demo-popover"
        visible={showIcon}
        location="bottom-start"
        onClick={() => {
          showIcon ? setShowIcon(false) : setShowIcon(true)
        }}
        list={iconItemList}
        style={{ marginInlineEnd: '30px' }}
      >
        <Button type="primary" shape="square">
          展示图标
        </Button>
      </Popover>
      <Popover
        visible={disableAction}
        onClick={() => {
          disableAction ? setDisableAction(false) : setDisableAction(true)
        }}
        list={itemListDisabled}
        location="right"
        onSelect={chooseHandle}
      >
        <Button type="primary" shape="square">
          禁用选项
        </Button>
      </Popover>
    </>
  )
}

export default Demo2
