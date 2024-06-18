import React from 'react'
import { Cell, Swipe } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import { Del } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const ViewNode = (text: string, style: any) => {
  return (
    <View
      style={{
        display: 'flex',
        width: pxTransform(60),
        height: pxTransform(104),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      {!harmonyAndRn() ? (
        <Del style={{ marginBottom: pxTransform(8) }} />
      ) : null}
      <Text>{text}</Text>
    </View>
  )
}

const App = () => {
  return (
    <>
      <Swipe
        style={{ height: pxTransform(104) }}
        rightAction={
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: pxTransform(240),
              height: pxTransform(104),
              fontSize: pxTransform(12),
            }}
          >
            <>
              {ViewNode('设置常买', {
                backgroundColor: '#F8F8F8',
                color: '#1A1A1A',
              })}
              {ViewNode('移入收藏', {
                backgroundColor: '#ffcc00',
                color: '#FFF',
              })}
              {ViewNode('看相似', {
                backgroundColor: '#FF860D',
                color: '#FFF',
              })}
              {ViewNode('删除', {
                backgroundColor: '#FA2C19',
                color: '#FFF',
              })}
            </>
          </View>
        }
      >
        <Cell
          title="左滑"
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
