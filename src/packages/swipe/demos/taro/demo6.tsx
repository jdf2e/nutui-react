import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button shape="square" type="danger">
            删除
          </Button>
        }
        disabled
      >
        <Cell title="禁用滑动" radius={0} />
      </Swipe>
    </>
  )
}
export default App
