import React, { useRef, useState } from 'react'
import { Button, Cell, Swipe, SwipeInstance } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

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
          <Button
            shape="square"
            type="success"
            style={{ alignSelf: 'stretch', height: pxTransform(46) }}
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
          </>
        }
      >
        <Cell
          title="事件"
          radius={0}
          style={{
            width: '100%',
            marginBottom: 0,
          }}
        />
      </Swipe>
      {/* <Dialog */}
      {/*  visible={showDialog} */}
      {/*  title="提示" */}
      {/*  onConfirm={() => { */}
      {/*    refDom.current && refDom.current.close() */}
      {/*    setShowDialog(false) */}
      {/*  }} */}
      {/* > */}
      {/*  {pRef.current === 'left' ? '确定选择吗？' : '确定删除吗？'} */}
      {/* </Dialog> */}
    </>
  )
}
export default App
