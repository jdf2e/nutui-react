import React from 'react'
import { Swipe, pxTransform } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import { Del, Heart, Search, Star, Top } from '@nutui/icons-react-taro'

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
    <View
      key={item.key}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: pxTransform(BUTTON_WIDTH),
        flex: '0 0 auto',
        fontSize: pxTransform(12),
        background: item.background,
        color: item.color,
      }}
    >
      <View
        style={{
          display: 'flex',
          width: pxTransform(ICON_SIZE),
          height: pxTransform(ICON_SIZE),
          marginBottom: pxTransform(6),
        }}
      >
        {item.icon}
      </View>
      <Text>{item.text}</Text>
    </View>
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
        style={{ height: pxTransform(96) }}
        rightAction={
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: pxTransform(96),
            }}
          >
            {actions.map((item) => ActionNode(item))}
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
