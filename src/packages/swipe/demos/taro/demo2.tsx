import React from 'react'
import { Swipe, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
// import { Del } from '@nutui/icons-react-taro'

const ViewNode = (text: string, style: any) => {
  return (
    <View
      style={{
        width: '60px',
        height: '104px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      {/* <Del style={{ marginBottom: '8px' }} /> */}
      <>{text}</>
    </View>
  )
}

const App = () => {
  return (
    <>
      <Swipe
        style={{ height: '104px' }}
        rightAction={
          <View
            style={{
              height: '104px',
              width: '240px',
              display: 'flex',
              fontSize: '12px',
            }}
          >
            <>
              {ViewNode('设置常买', {
                background: '#F8F8F8',
                color: '#1A1A1A',
              })}
              {ViewNode('移入收藏', {
                background: '#ffcc00',
                color: '#FFF',
              })}
              {ViewNode('看相似', {
                background: '#FF860D',
                color: '#FFF',
              })}
              {ViewNode('删除', {
                background: '#FA2C19',
                color: '#FFF',
              })}
            </>
          </View>
        }
      >
        <Cell
          title="左滑"
          radius={0}
          style={{ margin: 0, alignSelf: 'stretch' }}
        />
      </Swipe>
    </>
  )
}
export default App
