import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import '@/packages/cell/demo.scss'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'

interface T {
  basic: string
  extra: string
  description: string
  title: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  title7: string
  description1: string
  link: string
  urlJump: string
  content: string
  customRight: string
  clickEventToast: string
}

const CellDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      extra: '描述文字',
      description: '使用 nut-cell-group 支持 title description',
      title: '我是标题',
      title1: '我是描述',
      title2: '点击测试',
      title3: '圆角设置为0',
      title4: '链接 | 分组用法',
      title5: '垂直居中',
      title6: '自定义标题区域',
      title7: '分组用法',
      description1: '单元格之间不显示下边线',
      link: '链接',
      urlJump: 'URL 跳转',
      content: '自定义内容',
      customRight: '自定义右侧区域',
      clickEventToast: '点击事件',
    },
    'zh-TW': {
      basic: '基础用法',
      extra: '描述文字',
      description: '使用 nut-cell-group 支持 title description',
      title: '我是標題',
      title1: '我是描述',
      title2: '點擊測試',
      title3: '圓角設置為0',
      title4: '鏈接 | 分組用法',
      title5: '垂直居中',
      title6: '自定義標題區域',
      title7: '分組用法',
      description1: '單元格之間不顯示下邊線',
      link: '鏈接',
      urlJump: 'URL 跳轉',
      content: '自定義內容',
      customRight: '自定義右側區域',
      clickEventToast: '点击事件',
    },
    'en-US': {
      basic: 'Basic Usage',
      extra: 'extra',
      description: 'Usage nut-cell-group support title description',
      title: 'Title',
      title1: 'Description',
      title2: 'Click Test',
      title3: 'Round Radius 0',
      title4: 'Link | Cell.Group Usage',
      title5: 'Vertical Center',
      title6: 'Customize the title area',
      title7: 'Grouping usage',
      description1: 'The bottom edge is not displayed between cells',
      link: 'Link',
      urlJump: 'URL Jump',
      content: 'Customize Content',
      customRight: 'Customize the right area',
      clickEventToast: 'Click Test',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.content}</h2>
        <Demo2 />
        <h2>{translated.title6}</h2>
        <Demo3 />
        <h2>{translated.customRight}</h2>
        <Demo4 />
        <h2>{translated.title5}</h2>
        <Demo5 />
        <h2>{translated.title4}</h2>
        <Demo6 />
        <h2>{translated.title7}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default CellDemo
