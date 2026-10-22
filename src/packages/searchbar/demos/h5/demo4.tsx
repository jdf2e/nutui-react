import React from 'react'
import { SearchBar, Toast, Cell } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <>
      <Cell>
        <SearchBar
          left="文本"
          right="测试"
          onSearch={(value) => Toast.show(value)}
        />
      </Cell>
    </>
  )
}
export default Demo4
