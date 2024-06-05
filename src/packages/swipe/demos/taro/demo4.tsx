import React, { useRef } from 'react'
import { Button, Cell, Swipe } from '@nutui/nutui-react-taro'

const App = () => {
  const openRef = useRef(null)
  return (
    <>
      <Swipe
        ref={openRef}
        rightAction={
          <Button shape="square" type="danger">
            删除
          </Button>
        }
      >
        <Cell title="点击下方按钮打开或关闭" radius={0} />
      </Swipe>
      <Button
        onClick={() => openRef.current?.open()}
        type="primary"
        size="small"
      >
        打开
      </Button>
      <Button onClick={() => openRef.current?.close()}>关闭</Button>
    </>
  )
}
export default App
