import React from 'react'
import { SearchBar, Toast } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <>
      <SearchBar
        left="文本"
        right="测试"
        onSearch={(value) => Toast.show(value)}
      />
    </>
  )
}
export default Demo4
