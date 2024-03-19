import React, { CSSProperties } from 'react'
import Cell from '@/packages/cell'
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

const RateDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      control: '受控方式',
      halfStar: '半星',
      customIcon: '自定义 Icon',
      customQuantity: '自定义数量',
      minimumNumber: '最少选中数量（支持半星）',
      customColor: '自定义颜色',
      disabled: '禁用状态',
      readOnly: '只读状态',
      event: '绑定事件',
      touchable: '滑动选择',
      touchevent: '滑动事件',
    },
    'zh-TW': {
      basic: '基礎用法',
      control: '受控方式',
      halfStar: '半星',
      customIcon: '自定義 Icon',
      customQuantity: '自定義數量',
      minimumNumber: '最少選中數量（支持半星）',
      customColor: '自定義顏色',
      disabled: '禁用狀態',
      readOnly: '只讀狀態',
      event: '綁定事件',
      touchable: '滑動選擇',
      touchevent: '滑動事件',
    },
    'en-US': {
      basic: 'Basic Usage',
      control: 'Controlled Mode',
      halfStar: 'Half Star',
      customIcon: 'Custom Icon',
      customQuantity: 'Custom Quantity',
      minimumNumber: 'Minimum Number(support half star)',
      customColor: 'Custom Color',
      disabled: 'Disabled',
      readOnly: 'Readonly',
      event: 'Event',
      touchable: 'Touch to Select',
      touchevent: 'Touch Event',
    },
  })
  const cellStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell style={cellStyle}>
          <Demo1 />
        </Cell>

        <h2>{translated.control}</h2>
        <Cell style={cellStyle}>
          <Demo2 />
        </Cell>

        <h2>{translated.halfStar}</h2>
        <Cell style={cellStyle}>
          <Demo3 />
        </Cell>

        <h2>{translated.customIcon}</h2>
        <Cell style={cellStyle}>
          <Demo4 />
        </Cell>

        <h2>{translated.customQuantity}</h2>
        <Cell style={cellStyle}>
          <Demo5 />
        </Cell>

        <h2>{translated.minimumNumber}</h2>
        <Cell style={cellStyle}>
          <Demo6 />
        </Cell>

        <h2>{translated.customColor}</h2>
        <Cell style={cellStyle}>
          <Demo7 />
        </Cell>

        <h2>{translated.disabled}</h2>
        <Cell style={cellStyle}>
          <Demo8 />
        </Cell>

        <h2>{translated.readOnly}</h2>
        <Cell style={cellStyle}>
          <Demo9 />
        </Cell>

        <h2>{translated.event}</h2>
        <Cell style={cellStyle}>
          <Demo10 />
        </Cell>

        <h2>{translated.touchable}</h2>
        <Cell style={cellStyle}>
          <Demo11 />
        </Cell>

        <h2>{translated.touchevent}</h2>
        <Cell style={cellStyle}>
          <Demo12 />
        </Cell>
      </div>
    </>
  )
}

export default RateDemo
