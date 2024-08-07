import React from 'react'
import { Drag, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      <Drag
        direction="x"
        style={{
          top: '200px',
          left: '8px',
        }}
        className="drag-demo21"
      >
        <Button type="primary">X</Button>
      </Drag>
      <Drag
        direction="y"
        style={{
          top: '200px',
          right: '50px',
        }}
        className="drag-demo22"
      >
        <Button type="primary">Y</Button>
      </Drag>
    </>
  )
}
export default Demo2
