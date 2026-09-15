import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Tabs, pxTransform } from '@nutui/nutui-react-taro'

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
      style={{ '--nutui-tabs-titles-height': pxTransform(44) }}
      title={() => {
        return list.map((item) => {
          const active = tabvalue === item.paneKey
          return (
            <View
              key={item.paneKey}
              onClick={() => setTabvalue(item.paneKey)}
              className={`nut-tabs-titles-item ${active ? 'nut-tabs-titles-item-active' : ''}`}
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                lineHeight: 'initial',
              }}
            >
              <Text className="nut-tabs-titles-item-text">{item.title}</Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: pxTransform(11),
                  lineHeight: pxTransform(16),
                  color: active
                    ? 'var(--nutui-tabs-titles-item-active-color, #ff0f23)'
                    : 'var(--nutui-color-text, #505259)',
                }}
              >
                {item.subtitle}
              </Text>
            </View>
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
