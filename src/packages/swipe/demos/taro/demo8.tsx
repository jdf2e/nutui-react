import React, { useRef, useState } from 'react'
import { Button, Cell, Dialog, Swipe } from '@nutui/nutui-react-taro'
import { SwipeInstance } from '@/packages/Swipe'

const App = () => {
  const [showDialog, setShowDialog] = useState(false)
  const refDom = useRef<SwipeInstance>(null)
  const pRef = useRef('left')
  const beforeClose = (postion: string) => {
    pRef.current = postion
    setShowDialog(true)
  }

  return (
    <>
      <Swipe
        ref={refDom}
        beforeClose={beforeClose}
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
          </>
        }
      >
        <Cell title="事件" />
      </Swipe>
      <Dialog
        visible={showDialog}
        title="提示"
        onConfirm={() => {
          refDom.current && refDom.current.close()
          setShowDialog(false)
        }}
      >
        {pRef.current === 'left' ? '确定选择吗？' : '确定删除吗？'}
      </Dialog>
    </>
  )
}
export default App
