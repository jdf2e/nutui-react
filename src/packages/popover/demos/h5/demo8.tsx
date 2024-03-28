import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react'

const Demo8 = () => {
  const [visible, setVisible] = useState(false)
  const list = [
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
          position: 'fixed',
          bottom: 10,
          insetInlineEnd: -10,
          zIndex: 1000,
        }}
      >
        <Popover
          className="demo-popover"
          visible={visible}
          list={list}
          location="top-start"
          style={{ marginInlineEnd: '30px' }}
          closeOnOutsideClick={false}
          onClick={() => {
            visible ? setVisible(false) : setVisible(true)
          }}
        >
          <Button type="primary" shape="square">
            position: fixed
          </Button>
        </Popover>
      </div>
    </>
  )
}

export default Demo8
