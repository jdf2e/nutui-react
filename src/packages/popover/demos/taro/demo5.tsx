import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react-taro'
import { Home, Cart, Location } from '@nutui/icons-react-taro'

const Demo5 = () => {
  const [customTarget, setCustomTarget] = useState(false)
  const iconItemList = [
    {
      key: 'key1',
      name: 'option1',
      icon: <Home color="rgba(250, 44, 25, 1)" />,
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

  const clickCustomHandle = () => {
    setCustomTarget(!customTarget)
  }
  return (
    <>
      <Popover
        visible={customTarget}
        targetId="popid"
        list={iconItemList}
        location="top-start"
        onClick={() => {
          setCustomTarget(false)
        }}
      />
      <Button
        type="primary"
        shape="square"
        id="popid"
        onClick={clickCustomHandle}
      >
        自定义目标元素
      </Button>
    </>
  )
}

export default Demo5
