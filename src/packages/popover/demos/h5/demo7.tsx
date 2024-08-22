import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react'

const Demo7 = () => {
  const [visible, setVisible] = useState(false)
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
      <div
        style={{
          height: '200px',
          overflowY: 'scroll',
          position: 'relative',
        }}
      >
        <div style={{ height: '100px' }} />
        <Popover
          className="demo-popover"
          visible={visible}
          list={itemList}
          location="top-start"
          closeOnOutsideClick={false}
          style={{ marginInlineEnd: '30px' }}
          onClick={() => {
            visible ? setVisible(false) : setVisible(true)
          }}
        >
          <Button id="test" type="primary" shape="square">
            置于可滚动容器中
          </Button>
        </Popover>
        <div style={{ height: '100px' }} />
      </div>
    </>
  )
}

export default Demo7
