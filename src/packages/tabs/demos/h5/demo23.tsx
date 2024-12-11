import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'
import { Star } from '@nutui/icons-react'

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
            <div
              onClick={() => setTabvalue(item.paneKey)}
              className={`nut-tabs-titles-item ${tabvalue === item.paneKey ? 'nut-tabs-titles-item-active' : ''}`}
              key={item.paneKey}
            >
              {item.icon || null}
              <span className="nut-tabs-titles-item-text">{item.title}</span>
              <span className="nut-tabs-titles-item-line" />
            </div>
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
