import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Button, Cell, Swipe } from '@nutui/nutui-react-taro'

const App = () => {
  const [shouldCatchMove, setShouldCatchMove] = useState(false)

  return (
    <>
      <View catchMove={shouldCatchMove}>
        <Swipe
          rightAction={
            <Button type="primary" shape="square">
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
          <Cell title="左滑删除" radius={0} />
        </Swipe>
      </View>
    </>
  )
}
export default App
