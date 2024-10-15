import React from 'react'
import { Button, InputNumber, Swipe } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <>
            <Button
              shape="square"
              type="danger"
              style={{ alignSelf: 'stretch', height: pxTransform(46) }}
            >
              <Text style={{ fontSize: pxTransform(12), color: '#ffffff' }}>
                加入购物车
              </Text>
            </Button>
          </>
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
          <View style={{ marginLeft: pxTransform(10) }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Text>商品</Text>
              {!harmonyAndRn() ? <InputNumber /> : null}
            </View>
          </View>
        </View>
      </Swipe>
    </>
  )
}
export default App
