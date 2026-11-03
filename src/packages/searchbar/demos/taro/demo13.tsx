import React from 'react'
import { View, Text } from '@tarojs/components'
import { Photograph } from '@nutui/icons-react-taro'
import { SearchBar, Button, Switch, Cell } from '@nutui/nutui-react-taro'

const Demo13 = () => {
  return (
    <Cell>
      <SearchBar
        mode="ai"
        placeholder="搜搜感兴趣的商品吧"
        leftIn={
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              height: 28,
              padding: '0 6px 0 10px',
              gap: 4,
              boxSizing: 'border-box',
              background: 'var(--nutui-color-background-sunken)',
              color: 'var(--nutui-color-title)',
              borderRadius: 'var(--nutui-radius-base)',
            }}
          >
            <Text style={{ fontSize: 12, flexShrink: 0, whiteSpace: 'nowrap' }}>
              智能模式
            </Text>
            <Switch
              style={{
                '--nutui-switch-width': '22px',
                '--nutui-switch-height': '12px',
                '--nutui-switch-inside-width': '10px',
                '--nutui-switch-inside-height': '10px',
                '--nutui-switch-border-width': '1px',
              }}
              ariaLabel="智能模式"
            />
          </View>
        }
        rightIn={
          <View style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Photograph
              color="var(--nutui-color-text-help)"
              onClick={() => console.log('AI识图')}
            />
            <Button
              type="primary"
              size="mini"
              style={{
                height: 28,
                padding: '0 12px',
                borderRadius: 'var(--nutui-radius-l)',
              }}
            >
              搜索
            </Button>
          </View>
        }
      />
    </Cell>
  )
}
export default Demo13
