import React from 'react'
import { Drag, Button } from '@nutui/nutui-react'

const Demo3 = () => {
  return (
    <Drag direction="x" attract style={{ top: '275px', left: '0px' }}>
      <Button type="primary">attract</Button>
    </Drag>
  )
}
export default Demo3
