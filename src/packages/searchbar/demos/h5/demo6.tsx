import React, { useState } from 'react'
import { ArrowDown, ArrowUp } from '@nutui/icons-react'
import { SearchBar, Popover, Button } from '@nutui/nutui-react'

const Demo6 = () => {
  const itemList = [{ name: '搜秒送' }, { name: '搜全站' }]
  const [visible, setVisible] = useState(false)
  const [scope, setScope] = useState('搜秒送')
  return (
    <SearchBar
      style={{
        padding: '0 8px',
        '--nutui-searchbar-input-height': '40px',
      }}
      backable
      placeholder="搜搜感兴趣的商品吧"
      leftIn={
        <Popover
          visible={visible}
          onOpen={() => setVisible(true)}
          onClose={() => setVisible(false)}
          onSelect={(item) => setScope(item.name)}
          list={itemList}
          theme="light"
          location="bottom-right"
          showArrow={false}
          offset={[6, 6]}
          style={{
            '--nutui-popover-font-size': '14px',
            '--nutui-popover-height': '36px',
            '--nutui-popover-padding-horizontal': '18px',
            '--nutui-popover-border-radius': 'var(--nutui-radius-l)',
            '--nutui-popover-light-text-color': 'var(--nutui-color-title)',
          }}
        >
          <div
            style={{
              height: 40,
              width: 66,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {scope}
            {visible ? (
              <ArrowUp style={{ width: 12, height: 12 }} />
            ) : (
              <ArrowDown style={{ width: 12, height: 12 }} />
            )}
          </div>
        </Popover>
      }
      rightIn={
        <Button
          type="primary"
          size="small"
          style={{
            height: 32,
            padding: '0 12px',
            borderRadius: 'var(--nutui-radius-l)',
            marginRight: -8,
          }}
        >
          搜索
        </Button>
      }
    />
  )
}
export default Demo6
