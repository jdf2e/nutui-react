import React, { useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { Tabs, pxTransform } from '@nutui/nutui-react-taro'
import { Search } from '@nutui/icons-react-taro'

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
        <View
          key={item.paneKey}
          onClick={() => setTabvalue(item.paneKey)}
          className={`nut-tabs-titles-item ${active ? 'nut-tabs-titles-item-active' : ''}`}
        >
          <Text className="nut-tabs-titles-item-text">{item.title}</Text>
          <Text className="nut-tabs-titles-item-line" />
        </View>
      )
    })
    // 末尾占位:预留 >= 辅助操作宽度的空白,滚到最右端时末项文字不被辅助操作遮挡
    items.push(
      <View
        className="nut-tabs-titles-item"
        key="__aux_placeholder__"
        style={{ flex: 'none', minWidth: pxTransform(36) }}
      />
    )
    return items
  }

  return (
    <View
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
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          height: 'var(--nutui-tabs-titles-height, 36px)',
        }}
      >
        <Image
          src={maskUrl}
          style={{ display: 'block', width: pxTransform(16), height: '100%' }}
        />
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: pxTransform(36),
            background: 'var(--nutui-tabs-titles-background-color, #fff)',
          }}
        >
          <Search width={18} height={18} />
        </View>
      </View>
    </View>
  )
}
export default Demo25
