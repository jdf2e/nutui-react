import React from 'react'
import { Button, Swipe } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const App = () => {
  return (
    <>
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
    </>
  )
}
export default App
