import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Tabs } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'

const Demo23 = () => {
  const [tab7value, setTab7value] = useState('c1')
  const list6 = [
    {
      title: '自定义 1',
      paneKey: 'c1',
      icon: <Star />,
    },
    {
      title: '自定义 2',
      paneKey: 'c2',
    },
    {
      title: '自定义 3',
      paneKey: 'c3',
    },
  ]
  return (
    <>
      <Tabs
        value={tab7value}
        title={() => {
          return list6.map((item) => (
            <View
              onClick={() => setTab7value(item.paneKey)}
              className={`nut-tabs-titles-item ${tab7value === item.paneKey ? 'nut-tabs-titles-item-active' : ''}`}
              key={item.paneKey}
            >
              {item.icon || null}
              <Text className="nut-tabs-titles-item-text">{item.title}</Text>
              <Text className="nut-tabs-titles-item-line" />
            </View>
          ))
        }}
      >
        {list6.map((item) => (
          <Tabs.TabPane key={item.paneKey} value={item.paneKey}>
            {item.title}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo23
