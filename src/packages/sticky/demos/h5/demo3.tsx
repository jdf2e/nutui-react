import React, { useRef } from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const Demo3 = () => {
  const containerTopRef = useRef(null)
  return (
    <>
      <div ref={containerTopRef} style={{ height: '600px' }}>
        <Sticky container={containerTopRef} threshold={57}>
          <Button type="info" style={{ marginLeft: '100px' }}>
            指定容器内吸顶
          </Button>
        </Sticky>
      </div>
    </>
  )
}
export default Demo3
