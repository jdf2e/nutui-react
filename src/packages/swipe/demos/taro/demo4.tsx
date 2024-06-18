import React, { useRef } from 'react'
import { Button, Swipe, SwipeInstance } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const App = () => {
  const openRef = useRef<SwipeInstance>(null)
  return (
    <>
      <Swipe
        ref={openRef}
        rightAction={
          <Button
            shape="square"
            type="danger"
            style={{ alignSelf: 'stretch', height: pxTransform(46) }}
          >
            <Text style={{ fontSize: pxTransform(12), color: '#ffffff' }}>
              删除
            </Text>
          </Button>
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
          }}
        >
          <View style={{ marginLeft: pxTransform(10) }}>
            点击下方按钮打开或关闭
          </View>
        </View>
      </Swipe>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          onClick={() => openRef.current?.open('right')}
          type="primary"
          size="small"
        >
          <Text style={{ color: '#ffffff' }}>打开</Text>
        </Button>
        <Button size="small" onClick={() => openRef.current?.close()}>
          关闭
        </Button>
      </View>
    </>
  )
}
export default App
