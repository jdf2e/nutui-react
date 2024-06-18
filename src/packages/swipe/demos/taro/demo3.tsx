import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Button, Cell, Swipe } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const App = () => {
  const [shouldCatchMove, setShouldCatchMove] = useState(false)

  return (
    <>
      <View catchMove={shouldCatchMove}>
        <Swipe
          rightAction={
            <Button
              type="primary"
              shape="square"
              style={{ alignSelf: 'stretch', height: pxTransform(46) }}
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
            style={{
              width: '100%',
              marginBottom: 0,
            }}
          />
        </Swipe>
      </View>
    </>
  )
}
export default App
