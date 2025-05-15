import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react'

const Demo7 = () => {
  const [visible, setVisible] = useState(false)
  const itemList = [
    {
      key: 'key1',
      name: '主要文案内容主要文案内容',
    },
  ]
  return (
    <>
      <div
        style={{
          height: '200px',
          overflowY: 'scroll',
          position: 'relative',
        }}
      >
        <div style={{ height: 100 }} />
        <Popover
          className="demo-popover"
          theme="dark"
          visible={visible}
          list={itemList}
          location="top-left"
          closeOnOutsideClick={false}
          onClick={() => {
            visible ? setVisible(false) : setVisible(true)
          }}
        >
          <Button id="test" type="primary">
            置于可滚动容器中
          </Button>
        </Popover>
        <div style={{ height: 100 }} />
      </div>
    </>
  )
}

export default Demo7
