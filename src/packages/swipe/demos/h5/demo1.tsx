import React from 'react'
import { Button, Cell, Swipe } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button
            type="primary"
            shape="square"
            style={{ alignSelf: 'stretch', height: 46 }}
          >
            删除
          </Button>
        }
      >
        <Cell
          title="左滑删除"
          radius={0}
          style={{ margin: 0, alignSelf: 'stretch' }}
        />
      </Swipe>
    </>
  )
}
export default App
