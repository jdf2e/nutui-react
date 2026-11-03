import React from 'react'
import { SearchBar, ConfigProvider, Toast, Cell } from '@nutui/nutui-react'

const Demo3 = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          nutuiSearchbarBackground: 'var(--nutui-color-primary)',
          nutuiSearchbarContentBackground: '#fff',
          nutuiSearchbarInputTextAlign: 'right',
        }}
      >
        <Cell>
          <SearchBar onSearch={(value) => Toast.show(value)} />
        </Cell>
      </ConfigProvider>
    </>
  )
}
export default Demo3
