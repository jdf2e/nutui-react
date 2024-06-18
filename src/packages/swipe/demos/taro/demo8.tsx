import React, { useRef, useState } from 'react'
import { Button, Swipe, SwipeInstance } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
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
            <Text style={{ fontSize: pxTransform(12), color: '#ffffff' }}>
              选择
            </Text>
          </Button>
        }
        rightAction={
          <>
            <Button
              shape="square"
              type="danger"
              style={{ alignSelf: 'stretch', height: pxTransform(46) }}
            >
              <Text style={{ fontSize: pxTransform(12), color: '#ffffff' }}>
                删除
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
            zIndex: 2,
          }}
        >
          <View style={{ marginLeft: pxTransform(10) }}>事件</View>
        </View>
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
