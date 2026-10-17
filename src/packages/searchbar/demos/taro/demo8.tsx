import React from 'react'
import { Scan } from '@nutui/icons-react-taro'
import { SearchBar } from '@nutui/nutui-react-taro'

const Demo = () => {
  return (
    <>
      <SearchBar
        placeholder="使用inputProps扩展属性"
        inputProps={{
          confirmType: 'search',
          password: false,
          maxlength: 20,
        }}
      />
      <SearchBar
        leftIn={<Scan />}
        placeholder="自定义confirmType为search"
        inputProps={{
          confirmType: 'search',
          type: 'text',
        }}
      />
      <SearchBar
        placeholder="设置maxlength为10"
        inputProps={{
          maxlength: 10,
        }}
      />
    </>
  )
}
export default Demo
