import React from 'react'
import Taro from '@tarojs/taro'
import { Rate, Cell } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'

const RateDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      halfStar: '半星',
      customIcon: '自定义 Icon',
      customQuantity: '自定义数量',
      minimumNumber: '最少选中数量（支持半星）',
      customColor: '自定义颜色',
      disabled: '禁用状态',
      readonly: '只读状态',
      event: '绑定事件',
      customSize: '自定义大小 35px',
    },
    'zh-TW': {
      basic: '基礎用法',
      halfStar: '半星',
      customIcon: '自定義 Icon',
      customQuantity: '自定義數量',
      minimumNumber: '最少選中數量（支持半星）',
      customColor: '自定義顏色',
      disabled: '禁用狀態',
      readonly: '只讀狀態',
      event: '綁定事件',
      customSize: '自定義大小 35px',
    },
    'en-US': {
      basic: 'Basic Usage',
      halfStar: 'Half Star',
      customIcon: 'Custom Icon',
      customQuantity: 'Custom Quantity',
      minimumNumber: 'Minimum Number(support half star)',
      customColor: 'Custom Color',
      disabled: 'Disabled',
      readonly: 'Readonly',
      event: 'Event',
      customSize: 'Custom Size 35px',
    },
  })
  const onChange = (val: any) => {
    Taro.showToast({ title: String(val) })
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell>
          <Rate modelValue={3} />
        </Cell>
        <h2>{translated.halfStar}</h2>
        <Cell>
          <Rate
            allowHalf
            modelValue="3.5"
            onChange={(num) => console.log('allowHalf count', num)}
          />
        </Cell>

        <h2>{translated.customIcon}</h2>
        <Cell>
          <Rate
            checkedIcon="heart-fill1"
            uncheckedIcon="heart"
            modelValue="3"
            onChange={(num) => console.log('coustom icon count', num)}
          />
        </Cell>

        <h2>{translated.customQuantity}</h2>
        <Cell>
          <Rate count="6" modelValue="3" />
        </Cell>

        <h2>{translated.minimumNumber}</h2>
        <Cell>
          <Rate
            modelValue="2"
            minimizeValue={3}
            onChange={(num) => console.log(num)}
          />
        </Cell>

        <h2>{translated.customColor}</h2>
        <Cell>
          <Rate activeColor="#FFC800" modelValue="3" />
        </Cell>

        <h2>{translated.disabled}</h2>
        <Cell>
          <Rate disabled modelValue="3" />
        </Cell>

        <h2>{translated.readonly}</h2>
        <Cell>
          <Rate modelValue="3" readonly />
        </Cell>

        <h2>{translated.event}</h2>
        <Cell>
          <Rate modelValue="3" onChange={onChange} />
        </Cell>

        <h2>{translated.customSize}</h2>
        <Cell>
          <Rate modelValue="3" iconSize="35" />
        </Cell>
      </div>
    </>
  )
}

export default RateDemo
