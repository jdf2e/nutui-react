import React, { useState } from 'react'
import { ConfigProvider, SearchBar, Toast, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [show, SetShow] = useState(false)
  const toastShow = () => {
    SetShow(true)
  }
  return (
    <>
      <ConfigProvider
        theme={{
          nutuiSearchbarBackground: 'var(--nutui-color-primary)',
          nutuiSearchbarContentBackground: '#eee',
          nutuiSearchbarInputTextAlign: 'right',
        }}
      >
        <Cell>
          <SearchBar onSearch={() => toastShow()} />
        </Cell>
      </ConfigProvider>
      <Toast
        visible={show}
        content="search callback"
        onClose={() => {
          SetShow(false)
        }}
      />
    </>
  )
}
export default Demo3
