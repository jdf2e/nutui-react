import React from 'react'
import { Drag, Button } from '@nutui/nutui-react'

const Demo4 = () => {
  const right = () => {
    return document.documentElement.clientWidth - 300 - 9
  }
  const bottom = () => {
    return document.documentElement.clientHeight - 559
  }
  return (
    <>
      <div
        className="drag-boundary"
        style={{
          position: 'absolute',
          top: '360px',
          left: '8px',
          width: '300px',
          height: '200px',
          border: '1px solid var(--nutui-color-primary)',
        }}
      />
      <Drag
        boundary={{ top: 361, left: 9, bottom: bottom(), right: right() }}
        style={{ top: '400px', left: '50px' }}
      >
        <Button type="primary">boundary</Button>
      </Drag>
    </>
  )
}
export default Demo4
