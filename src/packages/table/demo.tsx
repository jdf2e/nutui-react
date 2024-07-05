import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'
import Demo11 from './demos/h5/demo11'
import Demo12 from './demos/h5/demo12'
import Demo13 from './demos/h5/demo13'
import Demo14 from './demos/h5/demo14'

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
      basic: 'Basic Usage',
      borderedAndAlign: 'Whether To Display Border And Align Text',
      summaryTitle: 'Show Summary Bar',
      striped: 'Stripes, Alternating Light And Shade',
      hideHeader: 'Hide Table Header',
      noDataTitle: 'Default Display When No Data, Supports Customization',
      customCell: 'Custom Cell',
      asynchronousRendering:
        'Supports Asynchronous Rendering(See the effect after 5s)',
      sorting: 'Supports Sorting',
      sorterIcon: 'Supports Replacing Sorting ICON',
      stickyHeader: 'Sticky Header',
      stickyLeftColumn: 'Sticky Left Column',
      stickyRightColumn: 'Sticky Rright Column',
      customRow: 'Custom Row',
    },
  })

  return (
    <div className="demo">
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
  )
}

export default TableDemo
