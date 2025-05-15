import React from 'react'
import { Swipe, harmony, pxTransform } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import { Del } from '@nutui/icons-react-taro'

const ViewNode = (text: string, style: any) => {
  return (
    <View
      style={{
        display: 'flex',
        width: pxTransform(56),
        height: pxTransform(96),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      {!harmony() ? <Del style={{ marginBottom: pxTransform(8) }} /> : null}
      <Text style={{ fontSize: pxTransform(12), color: style.color }}>
        {text}
      </Text>
    </View>
  )
}

const App = () => {
  return (
    <>
      <Swipe
        style={{ height: pxTransform(96) }}
        rightAction={
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: pxTransform(224),
              height: pxTransform(96),
              fontSize: pxTransform(12),
              borderRadius: pxTransform(8),
              overflow: 'hidden',
            }}
          >
            <>
              {ViewNode('加常买', {
                background: '#fff4e8',
                color: '#b5691a',
              })}
              {ViewNode('收藏', {
                background: '#ffbf00',
                color: '#FFF',
              })}
              {ViewNode('看相似', {
                background: '#ff791a',
                color: '#FFF',
              })}
              {ViewNode('删除', {
                background: '#ff0f23',
                color: '#FFF',
              })}
            </>
          </View>
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
          <View
            style={{ marginLeft: pxTransform(10), fontSize: pxTransform(12) }}
          >
            左滑
          </View>
        </View>
      </Swipe>
    </>
  )
}
export default App
