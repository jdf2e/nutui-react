import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Toast } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'
import Demo10 from './demos/taro/demo10'
import Demo11 from './demos/taro/demo11'
import Demo12 from './demos/taro/demo12'
import Demo13 from './demos/taro/demo13'
import Demo14 from './demos/taro/demo14'

const TableDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      borderedAndAlign: '是否显示边框，文字对齐',
      summaryTitle: '显示总结栏',
      striped: '条纹、明暗交替',
      hideHeader: '隐藏表头',
      noDataTitle: '无数据默认展示，支持自定义',
      customCell: '自定义单元格',
      asynchronousRendering: '支持异步渲染(5s之后看效果)',
      sorting: '支持排序',
      sorterIcon: '支持排序更换图标',
      stickyHeader: '固定表头',
      stickyLeftColumn: '固定左列',
      stickyRightColumn: '固定右列',
      customRow: '自定义行',
    },
    'en-US': {
      basic: 'Basic usage',
      borderedAndAlign: 'Whether to display border and align text',
      summaryTitle: 'Show summary bar',
      striped: 'Stripes, alternating light and shade',
      hideHeader: 'Hide table header',
      noDataTitle:
        'No data is displayed by default, and customization is supported',
      customCell: 'Custom cell',
      asynchronousRendering:
        'Support asynchronous rendering(See the effect after 5S)',
      sorting: 'Support sorting',
      sorterIcon: 'Supports sorting and changing ICONS',
      stickyHeader: 'sticky header',
      stickyLeftColumn: 'sticky left column',
      stickyRightColumn: 'sticky right column',
      customRow: 'Custom Row',
    },
  })

  const [show, setShow] = useState(false)
  const [toastMsg] = useState('')

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Toast
          type="text"
          visible={show}
          content={toastMsg}
          onClose={() => {
            setShow(false)
          }}
        />
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.borderedAndAlign}</h2>
        <Demo2 />
        <h2>{translated.summaryTitle}</h2>
        <Demo3 />
        <h2>{translated.striped}</h2>
        <Demo4 />
        <h2>{translated.hideHeader}</h2>
        <Demo5 />
        <h2>{translated.noDataTitle}</h2>
        <Demo6 />
        <h2>{translated.customCell}</h2>
        <Demo7 />
        <h2>{translated.asynchronousRendering}</h2>
        <Demo8 />
        <h2>{translated.sorting}</h2>
        <Demo9 />
        <h2>{translated.sorterIcon}</h2>
        <Demo10 />
        <h2>{translated.stickyHeader}</h2>
        <Demo11 />
        <h2>{translated.stickyLeftColumn}</h2>
        <Demo12 />
        <h2>{translated.stickyRightColumn}</h2>
        <Demo13 />
        <h2>{translated.customRow}</h2>
        <Demo14 />
      </div>
    </>
  )
}

export default TableDemo
