import React from 'react'
import Taro from '@tarojs/taro'
import { Button, Cell, Swipe } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const App = () => {
  const handleChange = () => {
    Taro.showToast({ title: 'title' })
  }
  return (
    <>
      <Swipe
        leftAction={
          <Button
            shape="square"
            type="success"
            style={{
              alignSelf: 'stretch',
              height: pxTransform(46),
            }}
          >
            选择
          </Button>
        }
        rightAction={
          <>
            <Button
              shape="square"
              type="danger"
              style={{ alignSelf: 'stretch', height: pxTransform(46) }}
            >
              删除
            </Button>
            <Button
              shape="square"
              type="info"
              style={{ alignSelf: 'stretch', height: pxTransform(46) }}
            >
              收藏
            </Button>
          </>
        }
        onActionClick={handleChange}
        onOpen={() => Taro.showToast({ title: '打开' })}
        onClose={() => Taro.showToast({ title: '关闭' })}
      >
        <Cell
          title="事件"
          radius={0}
          style={{ margin: 0, alignSelf: 'stretch' }}
        />
      </Swipe>
    </>
  )
}
export default App
