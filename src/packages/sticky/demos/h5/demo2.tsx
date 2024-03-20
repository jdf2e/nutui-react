import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <>
      <Sticky threshold={120}>
        <Button type="primary">距离顶部120px</Button>
      </Sticky>
    </>
  )
}
export default Demo2
