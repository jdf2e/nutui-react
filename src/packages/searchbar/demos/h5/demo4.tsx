import React from 'react'
import { SearchBar } from '../../searchbar'
import Toast from '../../../toast'

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
