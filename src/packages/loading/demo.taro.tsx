import React from 'react'
import Header from '@/sites/components/header'
import { useTranslate } from '../../sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'

const LoadingDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础用法',
      title2: '自定义颜色',
      title3: '自定义大小',
      title4: '带文字',
      title5: '带文字(竖向排列)',
      title6: '自定义文字颜色和大小',
      title7: '自定义图标',
      title8: '与遮罩层结合',
    },
    'zh-TW': {
      title1: '基礎用法',
      title2: '自定義顏色',
      title3: '自定義大小',
      title4: '帶文字',
      title5: '帶文字(豎向排列)',
      title6: '自定義文字顏色和大小',
      title7: '自定義圖標',
      title8: '與遮罩層結合',
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Custom Color',
      title3: 'Custom Size',
      title4: 'With Text',
      title5: 'With Text(Vertical)',
      title6: 'Custom Text Color and Size',
      title7: 'Custom Icon',
      title8: 'With Overlay',
    },
  })

  return (
    <>
      <Header />
      <div className="demo">
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
        <h2>{translated.title6}</h2>
        <Demo6 />
        <h2>{translated.title7}</h2>
        <Demo7 />
        <h2>{translated.title8}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default LoadingDemo
