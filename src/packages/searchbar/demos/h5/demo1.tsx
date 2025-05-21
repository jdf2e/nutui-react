import React from 'react'
import { Photograph, Scan } from '@nutui/icons-react'
import { SearchBar, Divider } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <SearchBar placeholder="麻辣烫" rightIn="搜索" />
      <SearchBar
        leftIn={<Scan />}
        placeholder="华为Mate 70"
        rightIn={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Photograph color="#888B94" onClick={() => console.log('拍照购')} />
            <Divider direction="vertical" />
            <span style={{ color: '#ff0f23' }}>搜索</span>
          </div>
        }
      />
    </>
  )
}
export default Demo1
