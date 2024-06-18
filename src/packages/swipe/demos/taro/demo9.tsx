import React from 'react'
import { Button, Cell, InputNumber, Swipe } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import pxTransform from '../../../../utils/px-transform'
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
              加入购物车
            </Button>
          </>
        }
      >
        <Cell
          radius={0}
          style={{
            width: '100%',
            marginBottom: 0,
          }}
        >
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
        </Cell>
      </Swipe>
    </>
  )
}
export default App
