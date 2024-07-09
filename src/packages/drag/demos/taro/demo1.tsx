import React from 'react'
import { Drag, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const onDragStart = () => {
    console.log('dragStart')
  }
  const onDragEnd = (state: any) => {
    console.log('dragEnd', state)
  }
  const onDrag = (state: any) => {
    console.log('dragging', state)
  }
  return (
    <Drag
      style={{ top: '120px', left: '24px' }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrag={onDrag}
    >
      <Button type="primary">drag</Button>
    </Drag>
  )
}
export default Demo1
