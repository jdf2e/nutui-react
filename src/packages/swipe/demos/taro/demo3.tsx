import React, { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Button, Swipe } from '@nutui/nutui-react-taro'
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
              <Text style={{ fontSize: pxTransform(12), color: '#ffffff' }}>
                删除
              </Text>
            </Button>
          }
          onTouchEnd={(e) => {
            setShouldCatchMove(false)
          }}
          onTouchMove={(e) => {
            setShouldCatchMove(true)
          }}
        >
          <View
            style={{
              width: '100%',
              height: pxTransform(46),
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <View style={{ marginLeft: pxTransform(10) }}>左滑删除</View>
          </View>
        </Swipe>
      </View>
    </>
  )
}
export default App
