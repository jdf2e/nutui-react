import React from 'react'
import { Cell, Swipe } from '@nutui/nutui-react'
import { Del } from '@nutui/icons-react'

const ViewNode = (text: string, style: any) => {
  return (
    <div
      style={{
        display: 'flex',
        width: 60,
        height: 104,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <Del style={{ marginBottom: 8 }} />
      <>{text}</>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Swipe
        style={{ height: 104 }}
        rightAction={
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 240,
              height: 104,
              fontSize: 12,
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
          </div>
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
