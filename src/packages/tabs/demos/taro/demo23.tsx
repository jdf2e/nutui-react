import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Tabs } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'

const Demo23 = () => {
  const [tabvalue, setTabvalue] = useState('c1')
  const list = [
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
        value={tabvalue}
        title={() => {
          return list.map((item) => (
            <View
              onClick={() => setTabvalue(item.paneKey)}
              className={`nut-tabs-titles-item ${tabvalue === item.paneKey ? 'nut-tabs-titles-item-active' : ''}`}
              key={item.paneKey}
            >
              {item.icon}
              <Text className="nut-tabs-titles-item-text">{item.title}</Text>
              <Text className="nut-tabs-titles-item-line" />
            </View>
          ))
        }}
      >
        {list.map((item) => (
          <Tabs.TabPane key={item.paneKey} value={item.paneKey}>
            {item.title}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo23
