import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo24 = () => {
  const [tabvalue, setTabvalue] = useState('c1')
  const list = [
    { title: '选中态标题', subtitle: '辅助信息文本', paneKey: 'c1' },
    { title: '非选中态标题', subtitle: '辅助信息文本', paneKey: 'c2' },
    { title: '非选中态标题', subtitle: '辅助信息文本', paneKey: 'c3' },
    { title: '非选中态标题', subtitle: '辅助信息文本', paneKey: 'c4' },
  ]
  return (
    <Tabs
      value={tabvalue}
      style={{ '--nutui-tabs-titles-height': '44px' }}
      title={() => {
        return list.map((item) => {
          const active = tabvalue === item.paneKey
          return (
            <div
              key={item.paneKey}
              onClick={() => setTabvalue(item.paneKey)}
              className={`nut-tabs-titles-item ${active ? 'nut-tabs-titles-item-active' : ''}`}
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                lineHeight: 'initial',
              }}
            >
              <span className="nut-tabs-titles-item-text">{item.title}</span>
              <span
                style={{
                  textAlign: 'center',
                  fontSize: '11px',
                  fontWeight: '400',
                  lineHeight: '16px',
                  color: active
                    ? 'var(--nutui-tabs-titles-item-active-color, #ff0f23)'
                    : 'var(--nutui-color-text, #505259)',
                }}
              >
                {item.subtitle}
              </span>
            </div>
          )
        })
      }}
    >
      {list.map((item) => (
        <Tabs.TabPane key={item.paneKey} value={item.paneKey}>
          {item.title}
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}
export default Demo24
