import React from 'react'
import { Button, Swipe, pxTransform } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'

const App = () => {
  return (
    <>
      <Swipe
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
        disabled
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
            禁用滑动
          </View>
        </View>
      </Swipe>
    </>
  )
}
export default App
