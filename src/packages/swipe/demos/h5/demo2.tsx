import React from 'react'
import { Cell, Swipe } from '@nutui/nutui-react'
import { Del } from '@nutui/icons-react'

const ViewNode = (text: string, style: any) => {
  return (
    <div
      style={{
        display: 'flex',
        width: 56,
        height: 96,
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
        style={{ height: 96 }}
        rightAction={
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 224,
              height: 96,
              fontSize: 12,
              borderRadius: 8,
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
