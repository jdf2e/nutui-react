import React, { useState } from 'react'
import { ConfigProvider, SearchBar, Toast } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [show, SetShow] = useState(false)
  const toastShow = () => {
    SetShow(true)
  }
  return (
    <>
      <ConfigProvider
        theme={{
          nutuiSearchbarInputBackground: '#eee',
          nutuiSearchbarInputTextAlign: 'right',
        }}
      >
        <SearchBar
          onSearch={() => toastShow()}
          style={{ backgroundColor: '#ff0f23' }}
        />
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
