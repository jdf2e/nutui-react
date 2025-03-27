import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react'

const Demo8 = () => {
  const [visible, setVisible] = useState(false)
  const list = [
    {
      key: 'key1',
      name: '主要文案内容主要文案内容',
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
          theme="dark"
          location="top-right"
          style={{ marginInlineEnd: '30px' }}
          closeOnOutsideClick={false}
          onClick={() => {
            visible ? setVisible(false) : setVisible(true)
          }}
        >
          <Button type="primary">position: fixed</Button>
        </Popover>
      </div>
    </>
  )
}

export default Demo8
