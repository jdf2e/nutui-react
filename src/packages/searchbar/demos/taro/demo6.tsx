import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { ArrowDown, ArrowUp } from '@nutui/icons-react-taro'
import { SearchBar, Popover, Button } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const itemList = [{ name: '搜秒送' }, { name: '搜全站' }]
  const [visible, setVisible] = useState(false)
  const [scope, setScope] = useState('搜秒送')
  return (
    <>
      <SearchBar
        style={{
          padding: '0 8px',
          '--nutui-searchbar-input-height': '40px',
        }}
        inputProps={{ style: { padding: 0 } }}
        backable
        placeholder="搜搜感兴趣的商品吧"
        leftIn={
          <View
            id="searchbar-demo6-scope"
            onClick={() => setVisible(!visible)}
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
          </View>
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
      <Popover
        targetId="searchbar-demo6-scope"
        visible={visible}
        onClose={() => setVisible(false)}
        onSelect={(item) => setScope(item.name)}
        list={itemList}
        theme="light"
        location="bottom-right"
        showArrow={false}
        offset={[6, 6]}
        style={{
          position: 'fixed',
          zIndex: 1100,
          '--nutui-popover-font-size': '14px',
          '--nutui-popover-height': '36px',
          '--nutui-popover-padding-horizontal': '18px',
          '--nutui-popover-border-radius': 'var(--nutui-radius-l)',
          '--nutui-popover-light-text-color': 'var(--nutui-color-title)',
        }}
      />
    </>
  )
}
export default Demo6
