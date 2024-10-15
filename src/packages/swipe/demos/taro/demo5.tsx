import React, { useRef } from 'react'
import { Button, Swipe, SwipeInstance } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const App = () => {
  const closeRef = useRef<SwipeInstance>(null)
  return (
    <>
      <Swipe
        ref={closeRef}
        rightAction={
          <Button
            shape="square"
            type="danger"
            style={{ alignSelf: 'stretch', height: pxTransform(46) }}
          >
            <Text style={{ fontSize: pxTransform(12), color: '#ffffff' }}>
              删除
            </Text>
          </Button>
        }
        onActionClick={() => {
          closeRef.current?.close()
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
          <View style={{ marginLeft: pxTransform(10) }}>点击右侧按钮关闭</View>
        </View>
      </Swipe>
    </>
  )
}
export default App
