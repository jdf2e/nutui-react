import React, { useRef } from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro'

const App = () => {
  const closeRef = useRef(null)
  return (
    <>
      <Swipe
        ref={closeRef}
        rightAction={
          <Button shape="square" type="danger">
            删除
          </Button>
        }
        onActionClick={() => {
          closeRef.current.close()
        }}
      >
        <Cell title="点击右侧按钮关闭" radius={0} />
      </Swipe>
    </>
  )
}
export default App
