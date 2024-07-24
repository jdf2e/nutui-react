import React, { useRef } from 'react'
import { Button, Cell, Swipe, SwipeInstance } from '@nutui/nutui-react'

const App = () => {
  const openRef = useRef<SwipeInstance>(null)
  return (
    <>
      <Swipe
        ref={openRef}
        rightAction={
          <Button
            shape="square"
            type="danger"
            style={{ alignSelf: 'stretch', height: 46 }}
          >
            删除
          </Button>
        }
      >
        <Cell
          title="点击下方按钮打开或关闭"
          radius={0}
          style={{ margin: 0, alignSelf: 'stretch' }}
        />
      </Swipe>
      <Button
        onClick={() => openRef.current?.open('right')}
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
