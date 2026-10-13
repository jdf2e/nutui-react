import React from 'react'
import { Cell, Swipe } from '@nutui/nutui-react'
import { Del, Star, Heart, Search, Top } from '@nutui/icons-react'

const BUTTON_WIDTH = 56
const ICON_SIZE = 16

interface ActionItem {
  key: string
  text: string
  icon: React.ReactNode
  background: string
  color: string
}

const ActionNode = (item: ActionItem): React.ReactNode => {
  return (
    <div
      key={item.key}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: BUTTON_WIDTH,
        flex: '0 0 auto',
        fontSize: 12,
        background: item.background,
        color: item.color,
      }}
    >
      <span
        style={{
          display: 'flex',
          width: ICON_SIZE,
          height: ICON_SIZE,
          marginBottom: 6,
        }}
      >
        {item.icon}
      </span>
      <span>{item.text}</span>
    </div>
  )
}

const App = () => {
  const actions: ActionItem[] = [
    {
      key: 'top',
      text: '置顶',
      icon: <Top size={ICON_SIZE} />,
      background: '#8c8c8c',
      color: '#FFF',
    },
    {
      key: 'alwaysBuy',
      text: '加常买',
      icon: <Star size={ICON_SIZE} />,
      background: '#595959',
      color: '#FFF',
    },
    {
      key: 'collect',
      text: '收藏',
      icon: <Heart size={ICON_SIZE} />,
      background: '#ffcc00',
      color: '#FFF',
    },
    {
      key: 'similar',
      text: '看相似',
      icon: <Search size={ICON_SIZE} />,
      background: '#ff860d',
      color: '#FFF',
    },
    {
      key: 'delete',
      text: '删除',
      icon: <Del size={ICON_SIZE} />,
      background: '#ff0f23',
      color: '#FFF',
    },
  ]

  return (
    <>
      <Swipe
        style={{ height: 96 }}
        rightAction={
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: 96,
            }}
          >
            {actions.map((item) => ActionNode(item))}
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
