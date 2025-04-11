import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react-taro'
import { Home } from '@nutui/icons-react-taro'

const Demo5 = () => {
  const [customTarget, setCustomTarget] = useState(false)
  const iconItemList = [
    {
      key: 'key1',
      name: '主要文案内容',
      icon: <Home />,
    },
  ]

  const clickCustomHandle = () => {
    setCustomTarget(!customTarget)
  }
  return (
    <>
      <Popover
        visible={customTarget}
        theme="dark"
        targetId="popid"
        list={iconItemList}
        location="top-left"
        onClick={() => {
          setCustomTarget(false)
        }}
      />
      <Button type="primary" id="popid" onClick={clickCustomHandle}>
        自定义目标元素
      </Button>
    </>
  )
}

export default Demo5
