import React from 'react'
import { SearchBar, ConfigProvider, Toast } from '@nutui/nutui-react'

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
        <SearchBar onSearch={(value) => Toast.show(value)} />
      </ConfigProvider>
    </>
  )
}
export default Demo3
