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

const PriceDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '支持尺寸：small、normal、large、xlarge',
      title2: '不保留小数',
      title3: '有人民币符号，无千位分隔',
      title4: '有人民币符号，有千位分隔，保留小数点后三位',
      title5: '调整 symbol 符号位置',
      title6: '异步随机变更',
      title7: '不展示 symbol 符号',
      title8: '划线价',
      title9: '场域分类：原子级、模块级、列表级、页面级',
    },
    'zh-TW': {
      title1: '支持尺寸：small、normal、large、xlarge',
      title2: '不保留小數',
      title3: '有人民幣符號，無千位分隔',
      title4: '有人民幣符號，有千位分隔，保留小數點後三位',
      title5: '調整 symbol 符號位置',
      title6: '異步隨機變更',
      title7: '不展示 symbol 符號',
      title8: '劃線價',
      title9: '場域分類：原子級、模塊級、列表級、頁面級',
    },
    'en-US': {
      title1: 'Support sizes：small、normal、large、xlarge',
      title2: 'No decimals',
      title3: 'With RMB symbol, no thousands separator',
      title4:
        'With RMB symbol, separated by thousands, keep three decimal places',
      title5: 'Adjust the symbol position',
      title6: 'Asynchronous random changes',
      title7: 'Do not display symbol',
      title8: 'Line-through price',
      title9: 'Field classification: atomic, module, list, page',
    },
  })

  return (
    <div className="demo">
      <h2>{translated.title1}</h2>
      <Demo1 />
      <h2>{translated.title9}</h2>
      <Demo9 />
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
      <h2>{translated.title8}</h2>
      <Demo8 />
    </div>
  )
}

export default PriceDemo
