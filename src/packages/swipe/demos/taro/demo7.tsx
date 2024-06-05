import React from 'react'
import Taro from '@tarojs/taro'
import { Button, Cell, Swipe } from '@nutui/nutui-react-taro'

const App = () => {
  const handleChange = () => {
    Taro.showToast({ title: 'title' })
  }
  return (
    <>
      <Swipe
        leftAction={
          <Button shape="square" type="success">
            选择
          </Button>
        }
        rightAction={
          <>
            <Button shape="square" type="danger">
              删除
            </Button>
            <Button shape="square" type="info">
              收藏
            </Button>
          </>
        }
        onActionClick={handleChange}
        onOpen={() => Taro.showToast({ title: '打开' })}
        onClose={() => Taro.showToast({ title: '关闭' })}
      >
        <Cell title="事件" />
      </Swipe>
    </>
  )
}
export default App
