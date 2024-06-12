import React from 'react'
import { Button, Cell, Swipe, Toast } from '@nutui/nutui-react'

const App = () => {
  const handleChange = () => {
    Toast.show({ title: 'title' })
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
              height: 46,
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
              style={{ alignSelf: 'stretch', height: 46 }}
            >
              删除
            </Button>
            <Button
              shape="square"
              type="info"
              style={{ alignSelf: 'stretch', height: 46 }}
            >
              收藏
            </Button>
          </>
        }
        onActionClick={handleChange}
        onOpen={() => Toast.show({ title: '打开' })}
        onClose={() => Toast.show({ title: '关闭' })}
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
