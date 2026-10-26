import React from 'react'
import { Photograph, Scan } from '@nutui/icons-react'
import { SearchBar, Button, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <Cell style={{ flexDirection: 'column' }}>
        <SearchBar
          placeholder="华为 Mate 70"
          leftIn={<Scan />}
          rightIn={
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Photograph color="var(--nutui-color-text-help)" />
              <Button
                type="primary"
                size="mini"
                style={{
                  height: 28,
                  padding: '0 12px',
                  borderRadius: 'var(--nutui-radius-base)',
                  marginRight: -8,
                }}
              >
                搜索
              </Button>
            </div>
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
                borderRadius: 'var(--nutui-radius-base)',
                marginRight: -8,
              }}
            >
              搜索
            </Button>
          }
        />
      </Cell>
    </>
  )
}
export default Demo1
