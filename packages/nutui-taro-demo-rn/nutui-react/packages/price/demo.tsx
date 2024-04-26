import React from 'react'
import { Cell } from '../cell/cell'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'

const PriceDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '支持三种尺寸：small、normal、large',
      title2: '不保留小数',
      title3: '有人民币符号，无千位分隔',
      title4: '有人民币符号，有千位分隔，保留小数点后三位',
      title5: '调整 symbol 符号位置',
      title6: '异步随机变更',
      title7: '不展示 symbol 符号',
      title8: '划线价',
    },
    'zh-TW': {
      title1: '支持三種尺寸：small、normal、large',
      title2: '不保留小數',
      title3: '有人民幣符號，無千位分隔',
      title4: '有人民幣符號，有千位分隔，保留小數點後三位',
      title5: '調整 symbol 符號位置',
      title6: '異步隨機變更',
      title7: '不展示 symbol 符號',
      title8: '劃線價',
    },
    'en-US': {
      title1: 'Support three sizes：small、normal、large',
      title2: 'No decimals',
      title3: 'With RMB symbol, no thousands separator',
      title4:
        'With RMB symbol, separated by thousands, keep three decimal places',
      title5: 'Adjust the symbol position',
      title6: 'Asynchronous random changes',
      title7: 'Do not display symbol',
      title8: 'Line-through price',
    },
  })

  return (
    <div className="demo">
      <h2>{translated.title1}</h2>
      <Demo1 />
      <h2>{translated.title2}</h2>
      <Cell>
        <Demo2 />
      </Cell>
      <h2>{translated.title3}</h2>
      <Cell>
        <Demo3 />
      </Cell>
      <h2>{translated.title4}</h2>
      <Cell>
        <Demo4 />
      </Cell>
      <h2>{translated.title5}</h2>
      <Cell>
        <Demo5 />
      </Cell>
      <h2>{translated.title7}</h2>
      <Cell>
        <Demo6 />
      </Cell>
      <h2>{translated.title6}</h2>
      <Cell>
        <Demo7 />
      </Cell>
      <h2>{translated.title8}</h2>
      <Cell>
        <Demo8 />
      </Cell>
    </div>
  )
}

export default PriceDemo
