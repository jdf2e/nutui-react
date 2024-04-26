import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [basic, setBasic] = useState(false)
  const [dark, setDark] = useState(false)
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
    </>
  )
}

export default Demo1
