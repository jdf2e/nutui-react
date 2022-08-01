import React, { useState } from 'react'
import Icon from '../icon'
import { SearchBar } from './searchbar'

const SearchBarDemo = () => {
  const [value, setValue] = useState('')
  const change = (val: string, e: Event) => {
    setValue(val)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <SearchBar placeholder="上京东，购好物" />
        <h2>搜索框形状及最大长度</h2>
        <SearchBar shape="round" maxLength={5} />
        <h2>搜索框内外背景设置</h2>
        <SearchBar
          background="linear-gradient(to right, #9866F0, #EB4D50)"
          inputBackground="#999"
          align="right"
        />
        <h2>搜索框文本设置</h2>
        <SearchBar label="文本" actionText="测试" />
        <h2>自定义图标设置</h2>
        <SearchBar
          leftoutIcon={<Icon name="heart-fill1" size="14" />}
          rightoutIcon={<Icon name="star-fill" size="14" />}
        />
        <h2>数据改变监听</h2>
        <SearchBar
          change={(val: string, e: Event) => change(val, e)}
          maxLength={10}
        />
        <span className="val-text">数值：{value}</span>
      </div>
    </>
  )
}

export default SearchBarDemo
