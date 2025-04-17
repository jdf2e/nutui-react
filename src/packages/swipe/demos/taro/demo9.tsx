import React from 'react'
import {
  Button,
  InputNumber,
  Swipe,
  pxTransform,
} from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'

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
              <Text
                style={{
                  fontSize: pxTransform(12),
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                }}
              >
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
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Text style={{ fontSize: pxTransform(12) }}>商品</Text>
              <InputNumber />
            </View>
          </View>
        </View>
      </Swipe>
    </>
  )
}
export default App
