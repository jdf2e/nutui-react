import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { HeartFill1, StarFill, ArrowDown } from '@nutui/icons-react-taro'
import {
  ConfigProvider,
  SearchBar,
  Toast,
  Popover,
} from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

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
  title7: string
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
      title7: '自定义设置',
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
      title7: '自定義設定',
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
      title7: 'custom settings',
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
      title7: 'pengaturan suai',
    },
  })
  const itemList = [
    { name: 'option1' },
    { name: 'option2' },
    { name: 'option3' },
  ]
  const [lightTheme, setLightTheme] = useState(false)

  const [value, setValue] = useState('')
  const change = (val: string, e: Event) => {
    setValue(val)
  }

  const [show, SetShow] = useState(false)
  const toastShow = () => {
    SetShow(true)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.title1}</h2>
        <SearchBar placeholder={translated.basePlaceholder} />
        <h2>{translated.title2}</h2>
        <SearchBar shape="round" maxLength={5} />
        <h2>{translated.title3}</h2>
        <ConfigProvider
          theme={{
            nutuiSearchbarBackground: 'var(--nutui-brand-color)',
            nutuiSearchbarInputBackground: '#eee',
            nutuiSearchbarInputTextAlign: 'right',
          }}
        >
          <SearchBar onSearch={() => toastShow()} />
        </ConfigProvider>
        <h2>{translated.title4}</h2>
        <SearchBar
          left={translated.text}
          right={translated.test}
          onSearch={() => toastShow()}
        />
        <h2>{translated.title5}</h2>
        <SearchBar
          left={<HeartFill1 size={14} />}
          right={<StarFill size={14} />}
          rightIn={
            <StarFill
              size={14}
              onClick={() => {
                console.log('StarFill right in')
              }}
            />
          }
        />

        <h2>{translated.title7}</h2>
        <SearchBar
          leftIn={
            <Popover
              visible={lightTheme}
              onClick={() => {
                lightTheme ? setLightTheme(false) : setLightTheme(true)
              }}
              list={itemList}
            >
              <div
                style={{
                  fontSize: '12px',
                  width: '50px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                更多
                <ArrowDown size={8} style={{ marginLeft: '5px' }} />
              </div>
            </Popover>
          }
        />
        <h2>{translated.title6}</h2>
        <SearchBar
          onChange={(val: string, e: Event) => change(val, e)}
          maxLength={10}
        />
        <div
          style={{
            height: '40px',
            lineHeight: '40px',
            color: '#666',
            fontSize: '14px',
          }}
        >
          {value}
        </div>
      </div>
      <Toast
        type="text"
        visible={show}
        msg="search callback"
        onClose={() => {
          SetShow(false)
        }}
      />
    </>
  )
}

export default SearchBarDemo
