import React, { useState } from 'react'
import { Button, Cell, Swipe } from '@nutui/nutui-react'

const App = () => {
  const [shouldCatchMove, setShouldCatchMove] = useState(false)

  return (
    <>
      <div>
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
          onTouchEnd={(e) => {
            setShouldCatchMove(false)
          }}
          onTouchMove={(e) => {
            setShouldCatchMove(true)
          }}
        >
          <Cell
            title="左滑删除"
            radius={0}
            style={{ margin: 0, alignSelf: 'stretch' }}
          />
        </Swipe>
      </div>
    </>
  )
}
export default App
