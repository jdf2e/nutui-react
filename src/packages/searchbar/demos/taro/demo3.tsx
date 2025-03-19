import React, { useState } from 'react'
import { SearchBar, ConfigProvider, Toast } from '@nutui/nutui-react-taro'

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
        <SearchBar onSearch={() => toastShow()} />
      </ConfigProvider>
      <Toast
        type="text"
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
