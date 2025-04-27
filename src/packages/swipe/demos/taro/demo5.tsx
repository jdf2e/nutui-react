import React, { useRef } from 'react'
import { Button, Swipe, SwipeRef, pxTransform } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'

const App = () => {
  const closeRef = useRef<SwipeRef>(null)
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
          <View
            style={{ marginLeft: pxTransform(10), fontSize: pxTransform(12) }}
          >
            点击右侧按钮关闭
          </View>
        </View>
      </Swipe>
    </>
  )
}
export default App
