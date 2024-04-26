import React from 'react'
import { Drag, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Drag style={{ left: '8px' }}>
      <Button type="primary">drag</Button>
    </Drag>
  )
}
export default Demo1
