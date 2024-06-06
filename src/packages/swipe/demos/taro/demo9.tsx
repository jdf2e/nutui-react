import React from 'react'
import { Button, Cell, InputNumber, Swipe } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '../../../../utils/px-transform'

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
        <Cell radius={0} style={{ margin: 0, alignSelf: 'stretch' }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <span>商品</span>
            <InputNumber />
          </View>
        </Cell>
      </Swipe>
    </>
  )
}
export default App
