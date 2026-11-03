import React from 'react'
import { View } from '@tarojs/components'
import { SearchBar, Button, Cell } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  return (
    <View
      style={{
        '--nutui-searchbar-input-curror-color': 'var(--nutui-color-primary)',
      }}
    >
      <Cell style={{ flexDirection: 'column' }}>
        <SearchBar
          style={{
            '--nutui-color-primary': 'transparent',
            '--nutui-searchbar-background': 'transparent',
            '--nutui-searchbar-content-background':
              'var(--nutui-color-background-sunken)',
            '--nutui-searchbar-gap': '10px',
          }}
          placeholder="搜搜感兴趣的商品吧"
          leftIn={null}
        />
        <SearchBar
          style={{
            '--nutui-searchbar-input-height': '32px',
            '--nutui-searchbar-gap': '10px',
          }}
          leftIn={null}
          placeholder="轻量搜索"
          rightIn={
            <Button
              type="primary"
              size="mini"
              style={{
                padding: '0 12px',
                borderRadius: 'var(--nutui-radius-l)',
                marginRight: -6,
              }}
            >
              搜索
            </Button>
          }
        />
      </Cell>
    </View>
  )
}
export default Demo12
