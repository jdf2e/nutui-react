import React from 'react'
import { Button, Cell, Swipe } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

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
            删除
          </Button>
        }
        disabled
      >
        <Cell
          title="禁用滑动"
          radius={0}
          style={{
            width: '100%',
            marginBottom: 0,
          }}
        />
      </Swipe>
    </>
  )
}
export default App
