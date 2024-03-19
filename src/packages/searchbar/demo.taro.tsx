import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'

const SearchBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础用法',
      title2: '搜索框形状及最大长度',
      title3: '搜索框内外背景设置',
      title4: '搜索框文本设置',
      title5: '自定义图标设置',
      title6: '数据改变监听',
      title7: '自定义设置',
    },
    'zh-TW': {
      title1: '基礎用法',
      title2: '蒐索框形狀及最大長度',
      title3: '蒐索框內外背景設定',
      title4: '蒐索框文字設定',
      title5: '自定義圖標設定',
      title6: '數據改變監聽',
      title7: '自定義設定',
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Search Box Shape And Maximum Length',
      title3: 'Background Settings Inside And Outside The Search Box',
      title4: 'Search Box Text Settings',
      title5: 'Custom Icon Settings',
      title6: 'Data Change Monitoring',
      title7: 'Custom Settings',
    },
    'id-ID': {
      title1: 'penggunaan dasar',
      title2: 'bentuk kotak pencarian dan panjang maksimum',
      title3: 'pengaturan latar belakang di dalam dan diluar kotak pencarian',
      title4: 'tetapan teks kotak pencarian',
      title5: 'pengaturan ikon suai',
      title6: 'Monitor perubahan data',
      title7: 'pengaturan suai',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.title1}</h2>
        <Demo1 />
        <h2>{translated.title2}</h2>
        <Demo2 />
        <h2>{translated.title3}</h2>
        <Demo3 />
        <h2>{translated.title4}</h2>
        <Demo4 />
        <h2>{translated.title5}</h2>
        <Demo5 />
        <h2>{translated.title7}</h2>
        <Demo6 />
        <h2>{translated.title6}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default SearchBarDemo
