import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <>
      <Sticky threshold={0} position="bottom">
        <Button type="primary">距离底部0px</Button>
      </Sticky>
    </>
  )
}
export default Demo4
