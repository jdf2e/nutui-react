import React from 'react'
import { View } from '@tarojs/components'
import { Photograph, Scan } from '@nutui/icons-react-taro'
import { SearchBar, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <SearchBar
        placeholder="华为 Mate 70"
        leftIn={<Scan />}
        rightIn={
          <View style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Photograph color="var(--nutui-color-text-help)" />
            <Button
              type="primary"
              size="mini"
              style={{
                height: 28,
                padding: '0 12px',
                borderRadius: 'var(--nutui-radius-l)',
                marginRight: -8,
              }}
            >
              搜索
            </Button>
          </View>
        }
      />
      <SearchBar
        placeholder="搜搜感兴趣的商品吧"
        rightIn={
          <Button
            type="primary"
            size="mini"
            style={{
              height: 28,
              padding: '0 12px',
              borderRadius: 'var(--nutui-radius-l)',
              marginRight: -8,
            }}
          >
            搜索
          </Button>
        }
      />
    </>
  )
}
export default Demo1
