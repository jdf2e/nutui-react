import React, { useRef } from 'react'
import { Button, Cell, Space, Swipe, SwipeInstance } from '@nutui/nutui-react'

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
      <Space style={{ marginTop: 10, marginLeft: 10 }}>
        <Button
          onClick={() => openRef.current?.open('right')}
          type="primary"
          size="small"
        >
          打开
        </Button>
        <Button onClick={() => openRef.current?.close()} size="small">
          关闭
        </Button>
      </Space>
    </>
  )
}
export default App
