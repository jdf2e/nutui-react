import React from 'react'
import { Photograph } from '@nutui/icons-react'
import { SearchBar, Button, Switch } from '@nutui/nutui-react'

const Demo13 = () => {
  return (
    <SearchBar
      mode="ai"
      placeholder="搜搜感兴趣的商品吧"
      leftIn={
        <div
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
          <span style={{ fontSize: 12, flexShrink: 0, whiteSpace: 'nowrap' }}>
            智能模式
          </span>
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
        </div>
      }
      rightIn={
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
        </div>
      }
    />
  )
}
export default Demo13
