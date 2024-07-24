import React from 'react'
import { Button, Cell, Swipe } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button
            shape="square"
            type="danger"
            style={{ alignSelf: 'stretch', height: 46 }}
          >
            删除
          </Button>
        }
        disabled
      >
        <Cell
          title="禁用滑动"
          radius={0}
          style={{ margin: 0, alignSelf: 'stretch' }}
        />
      </Swipe>
    </>
  )
}
export default App
