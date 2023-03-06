import React, { useState } from 'react'
import Icon from '../icon'
import { SearchBar } from './searchbar'
import Toast from '../toast'
import { useTranslate } from '../../sites/assets/locale'

type TSearchDemo = {
  basePlaceholder: string
  text: string
  test: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
}
const SearchBarDemo = () => {
  const [translated] = useTranslate<TSearchDemo>({
    'zh-CN': {
      basePlaceholder: '上京东，购好物',
      text: '文本',
      test: '测试',
      title1: '基础用法',
      title2: '搜索框形状及最大长度',
      title3: '搜索框内外背景设置',
      title4: '搜索框文本设置',
      title5: '自定义图标设置',
      title6: '数据改变监听',
    },
    'zh-TW': {
      basePlaceholder: '上京東，購好物',
      text: '文字',
      test: '測試',
      title1: '基礎用法',
      title2: '蒐索框形狀及最大長度',
      title3: '蒐索框內外背景設定',
      title4: '蒐索框文字設定',
      title5: '自定義圖標設定',
      title6: '數據改變監聽',
    },
    'en-US': {
      basePlaceholder: 'Go to jd.com and buy good things',
      text: 'text',
      test: 'test',
      title1: 'basic usage',
      title2: 'search box shape and maximum length',
      title3: 'background settings inside and outside the search box',
      title4: 'search box text settings',
      title5: 'custom icon settings',
      title6: 'data change monitoring',
    },
    'id-ID': {
      basePlaceholder: 'pergi ke jd.com, membeli barang baik',
      text: 'teks',
      test: 'tes',
      title1: 'penggunaan dasar',
      title2: 'bentuk kotak pencarian dan panjang maksimum',
      title3: 'pengaturan latar belakang di dalam dan diluar kotak pencarian',
      title4: 'tetapan teks kotak pencarian',
      title5: 'pengaturan ikon suai',
      title6: 'Monitor perubahan data',
    },
  })

  const [value, setValue] = useState('')
  const change = (val: string, e: Event) => {
    setValue(val)
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.title1}</h2>
        <SearchBar placeholder={translated.basePlaceholder} />
        <h2>{translated.title2}</h2>
        <SearchBar shape="round" maxLength={5} />
        <h2>{translated.title3}</h2>
        <SearchBar
          background="linear-gradient(to right, #9866F0, #EB4D50)"
          inputBackground="#999"
          align="right"
          onSearch={(value) => Toast.text(value)}
        />
        <h2>{translated.title4}</h2>
        <SearchBar
          label={translated.text}
          actionText={translated.test}
          clearIconSize="14px"
          onSearch={(value) => Toast.text(value)}
        />
        <h2>{translated.title5}</h2>
        <SearchBar
          leftoutIcon={<Icon name="heart-fill1" size="14" />}
          rightoutIcon={<Icon name="star-fill" size="14" />}
          rightinIcon={<Icon name="star-fill" size="14" />}
        />
        <h2>{translated.title6}</h2>
        <SearchBar
          onChange={(val: string, e: Event) => change(val, e)}
          maxLength={10}
        />
        <span className="val-text">value：{value}</span>
      </div>
    </>
  )
}

export default SearchBarDemo
