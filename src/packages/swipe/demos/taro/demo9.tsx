import React from 'react'
import { Swipe, Cell, Button, InputNumber } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <>
            <Button shape="square" type="danger">
              加入购物车
            </Button>
          </>
        }
      >
        <Cell>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <span>商品</span>
            <InputNumber style={{ float: 'right' }} />
          </View>
        </Cell>
      </Swipe>
    </>
  )
}
export default App
