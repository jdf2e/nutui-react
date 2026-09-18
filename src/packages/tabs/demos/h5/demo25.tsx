import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'
import { Search } from '@nutui/icons-react'

const Demo25 = () => {
  const [tabvalue, setTabvalue] = useState('c1')
  const list = [
    { title: 'Tab longitem 1', paneKey: 'c1' },
    { title: 'Tab longitem 2', paneKey: 'c2' },
    { title: 'Tab3', paneKey: 'c3' },
    { title: 'Tab4', paneKey: 'c4' },
    { title: 'Tab5', paneKey: 'c5' },
    { title: 'Tab6', paneKey: 'c6' },
  ]

  const maskUrl =
    'https://img20.360buyimg.com/img/jfs/t1/528620/16/3371/845/6aacb069F6a9923f5/0276020048fb8b3a.png'

  const renderTitles = () => {
    const items = list.map((item) => {
      const active = tabvalue === item.paneKey
      return (
        <div
          key={item.paneKey}
          onClick={() => setTabvalue(item.paneKey)}
          className={`nut-tabs-titles-item ${active ? 'nut-tabs-titles-item-active' : ''}`}
        >
          <span className="nut-tabs-titles-item-text">{item.title}</span>
          <span className="nut-tabs-titles-item-line" />
        </div>
      )
    })
    // 末尾占位:预留 >= 辅助操作宽度的空白,滚到最右端时末项文字不被辅助操作遮挡
    items.push(
      <div
        className="nut-tabs-titles-item"
        key="__aux_placeholder__"
        aria-hidden
        style={{ flex: 'none', minWidth: 'calc(36px * var(--nut-scale-f, 1))' }}
      />
    )
    return items
  }

  return (
    <div
      style={{
        position: 'relative',
        '--nutui-tabs-titles-background-color': '#fff',
      }}
    >
      <Tabs value={tabvalue} align="left" title={renderTitles}>
        {list.map((item) => (
          <Tabs.TabPane key={item.paneKey} value={item.paneKey}>
            {item.title}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          height: 'var(--nutui-tabs-titles-height, 36px)',
        }}
      >
        <img
          src={maskUrl}
          alt=""
          style={{ display: 'block', width: '16px', height: '100%' }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: 'calc(36px * var(--nut-scale-f, 1))',
            background: 'var(--nutui-tabs-titles-background-color, #fff)',
          }}
        >
          <Search width={18} height={18} />
        </div>
      </div>
    </div>
  )
}
export default Demo25
