import React from 'react'
import { SearchBar } from '../../searchbar'
import ConfigProvider from '../../../configprovider'
import Toast from '../../../toast'

const Demo3 = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          nutuiSearchbarBackground: 'var(--nutui-color-primary)',
          nutuiSearchbarContentBackground: '#eee',
          nutuiSearchbarInputTextAlign: 'right',
        }}
      >
        <SearchBar onSearch={(value) => Toast.show(value)} />
      </ConfigProvider>
    </>
  )
}
export default Demo3
