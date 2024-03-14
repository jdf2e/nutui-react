import React, { useRef } from 'react'
import { Button, Sticky } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const containerTopRef = useRef(null)
  return (
    <>
      <div ref={containerTopRef} style={{ height: '600px' }}>
        <Sticky container={containerTopRef} threshold={60}>
          <Button type="info" style={{ marginLeft: '100px' }}>
            指定容器内吸顶
          </Button>
        </Sticky>
      </div>
    </>
  )
}
export default Demo3
