import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [customColor, setCustomColor] = useState(false)
  const itemList = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ]
  return (
    <>
      <Popover
        className="custom-color"
        visible={customColor}
        list={itemList}
        location="right-start"
        onClick={() => {
          customColor ? setCustomColor(false) : setCustomColor(true)
        }}
      >
        <Button type="primary" shape="square">
          自定义颜色
        </Button>
      </Popover>
    </>
  )
}

export default Demo6
