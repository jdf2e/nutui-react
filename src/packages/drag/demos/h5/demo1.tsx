import React from 'react'
import { Drag, Button } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <Drag style={{ top: '120px', left: '24px' }}>
      <Button type="primary">drag</Button>
    </Drag>
  )
}
export default Demo1
