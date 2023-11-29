import React, { useState } from 'react'
import { HeartFill } from '@nutui/icons-react'
import { Rate } from './rate'
import Cell from '@/packages/cell'
import { useTranslate } from '@/sites/assets/locale'

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
    },
  })
  const [score, setScore] = useState(2)
  const onChange = (val: number) => {
    alert(val)
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Rate defaultValue={3} />
        </Cell>

        <h2>{translated.control}</h2>
        <Cell>
          <Rate value={score} onChange={(value) => setScore(value)} />
        </Cell>

        <h2>{translated.halfStar}</h2>
        <Cell>
          <Rate allowHalf defaultValue={3.5} />
        </Cell>

        <h2>{translated.customIcon}</h2>
        <Cell>
          <Rate checkedIcon={<HeartFill />} defaultValue={3} />
        </Cell>

        <h2>{translated.customQuantity}</h2>
        <Cell>
          <Rate count={6} defaultValue={3} />
        </Cell>

        <h2>{translated.minimumNumber}</h2>
        <Cell>
          <Rate defaultValue={2} min={3} onChange={(num) => console.log(num)} />
        </Cell>

        <h2>{translated.customColor}</h2>
        <Cell>
          <Rate
            defaultValue={3}
            checkedIcon={<HeartFill color="rgb(255, 200, 0)" />}
          />
        </Cell>

        <h2>{translated.disabled}</h2>
        <Cell>
          <Rate disabled defaultValue={3} />
        </Cell>

        <h2>{translated.readOnly}</h2>
        <Cell>
          <Rate defaultValue={3} readOnly />
        </Cell>

        <h2>{translated.event}</h2>
        <Cell>
          <Rate defaultValue={3} onChange={onChange} />
        </Cell>
      </div>
    </>
  )
}

export default RateDemo
