import React, { useRef } from 'react'
import { Button, Cell, Swipe, SwipeRef } from '@nutui/nutui-react'

const App = () => {
  const closeRef = useRef<SwipeRef>(null)
  return (
    <>
      <Swipe
        ref={closeRef}
        rightAction={
          <Button
            shape="square"
            type="danger"
            style={{ alignSelf: 'stretch', height: 46 }}
          >
            删除
          </Button>
        }
        onActionClick={() => {
          closeRef.current?.close()
        }}
      >
        <Cell
          title="点击右侧按钮关闭"
          radius={0}
          style={{ margin: 0, alignSelf: 'stretch' }}
        />
      </Swipe>
    </>
  )
}
export default App
