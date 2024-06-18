import React from 'react'
import Taro from '@tarojs/taro'
import { Button, Swipe } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
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
            <Button
              shape="square"
              type="info"
              style={{ alignSelf: 'stretch', height: pxTransform(46) }}
            >
              <Text style={{ fontSize: pxTransform(12), color: '#ffffff' }}>
                收藏
              </Text>
            </Button>
          </>
        }
        onActionClick={handleChange}
        onOpen={() => Taro.showToast({ title: '打开' })}
        onClose={() => Taro.showToast({ title: '关闭' })}
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
    </>
  )
}
export default App
