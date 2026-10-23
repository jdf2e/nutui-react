import React, { useState } from 'react'
import { SearchBar, Toast, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [show, SetShow] = useState(false)
  const toastShow = () => {
    SetShow(true)
  }
  return (
    <>
      <Cell>
        <SearchBar left="文本" right="测试" onSearch={() => toastShow()} />
      </Cell>
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
export default Demo4
