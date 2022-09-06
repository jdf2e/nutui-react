import React, { useState } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { ActionSheet, Cell } from '@/packages/nutui.react.taro'

export type ItemType<T> = { [key: string]: T }
interface Item {
  name: string
  subname?: string
  disable?: boolean
}

interface T {
  '0f87770f': string
  e23e5e80: string
  b6102b61: string
  acc5939e: string
  '85dae65b': string
  '314631ed': string
  '74fc5d8a': string
  '84aa6bce': string
  '595d7bb3': string
  '0a1a6656': string
  c3a08064: string
  a4a58638: string
  '2cd0f3be': string
  e1699442: string
  c3a08065: string
}
const ActionSheetDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '0f87770f': '选项一',
      e23e5e80: '选项二',
      b6102b61: '选项三',
      acc5939e: '描述信息',
      '85dae65b': '着色选项',
      '314631ed': '禁用选项',
      '74fc5d8a': '基本用法',
      '84aa6bce': '基础用法',
      '595d7bb3': '展示取消按钮',
      '0a1a6656': '展示描述信息',
      c3a08064: '选项状态',
      a4a58638: '带取消按钮）',
      '2cd0f3be': '取消',
      e1699442: '这是一段描述信息',
      c3a08065: '自定义内容',
    },
    'zh-TW': {
      '0f87770f': '選項一',
      e23e5e80: '選項二',
      b6102b61: '選項三',
      acc5939e: '描述資訊',
      '85dae65b': '著色選項',
      '314631ed': '禁用選項',
      '74fc5d8a': '基本用法',
      '84aa6bce': '基礎用法',
      '595d7bb3': '展示取消按鈕',
      '0a1a6656': '展示描述資訊',
      c3a08064: '選項狀態',
      a4a58638: '帶取消按鈕）',
      '2cd0f3be': '取消',
      e1699442: '這是一段描述資訊',
      c3a08065: '自定義內容',
    },
    'en-US': {
      '0f87770f': 'Option One',
      e23e5e80: 'Option Two',
      b6102b61: 'Option Three',
      acc5939e: 'Description Information',
      '85dae65b': 'Shading Options',
      '314631ed': 'Disable Option',
      '74fc5d8a': 'Basic Usage',
      '84aa6bce': 'Basic Usage',
      '595d7bb3': 'Show Cancel Button',
      '0a1a6656': 'Display Description Information',
      c3a08064: 'Option Status',
      a4a58638: 'with cancel button)',
      '2cd0f3be': 'Cancel',
      e1699442: 'This is a descriptive message',
      c3a08065: 'Custom content',
    },
  })

  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  const [isVisible5, setIsVisible5] = useState(false)
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [val3, setVal3] = useState('')
  const menuItemsOne: ItemType<string>[] = [
    {
      name: translated['0f87770f'],
    },
    {
      name: translated.e23e5e80,
    },
    {
      name: translated.b6102b61,
    },
  ]
  const menuItemsTwo: ItemType<string>[] = [
    {
      name: translated['0f87770f'],
    },
    {
      name: translated.e23e5e80,
    },
    {
      name: translated.b6102b61,
      subname: translated.acc5939e,
    },
  ]
  const menuItemsThree: ItemType<string | boolean>[] = [
    {
      name: translated['85dae65b'],
    },
    {
      name: translated['314631ed'],
      disable: true,
    },
  ]

  const chooseItem = (itemParams: any) => {
    console.log(itemParams.name, 'itemParams')
    setVal1(itemParams.name)
    setIsVisible1(false)
  }

  const chooseItemTwo = (itemParams: Item) => {
    setVal2(itemParams.name)
    setIsVisible2(false)
  }
  const chooseItemThree = (itemParams: Item) => {
    setVal3(itemParams.name)
    setIsVisible3(false)
  }

  return (
    <>
      <div className="demo">
        <h2>{translated['74fc5d8a']}</h2>
        <Cell isLink onClick={() => setIsVisible1(!isVisible1)}>
          <span>
            <label htmlFor={translated['84aa6bce']}>
              {translated['84aa6bce']}
            </label>
          </span>
          <div className="selected-option">{val1}</div>
        </Cell>
        <Cell isLink onClick={() => setIsVisible2(!isVisible2)}>
          <span>
            <label htmlFor={translated['595d7bb3']}>
              {translated['595d7bb3']}
            </label>
          </span>
          <div className="selected-option">{val2}</div>
        </Cell>
        <Cell isLink onClick={() => setIsVisible3(!isVisible3)}>
          <span>
            <label htmlFor={translated['0a1a6656']}>
              {translated['0a1a6656']}
            </label>
          </span>
          <div className="selected-option">{val3}</div>
        </Cell>
        <h2>{translated.c3a08064}</h2>
        <Cell isLink onClick={() => setIsVisible4(!isVisible4)}>
          <span>
            <label htmlFor={translated.c3a08064}>{translated.c3a08064}</label>
          </span>
        </Cell>
        <h2>{translated.c3a08065}</h2>
        <Cell isLink onClick={() => setIsVisible5(!isVisible4)}>
          <span>
            <label htmlFor={translated.c3a08065}>{translated.c3a08065}</label>
          </span>
        </Cell>

        {/* demo 基础用法 */}
        <ActionSheet
          visible={isVisible1}
          menuItems={menuItemsOne}
          onChoose={chooseItem}
          onCancel={() => setIsVisible1(false)}
        />
        {/* demo(带取消按钮） */}
        <ActionSheet
          visible={isVisible2}
          cancelTxt={translated['2cd0f3be']}
          menuItems={menuItemsOne}
          onChoose={chooseItemTwo}
          onCancel={() => setIsVisible2(false)}
        />
        {/* 展示描述信息 */}
        <ActionSheet
          visible={isVisible3}
          description={translated.e1699442}
          cancelTxt={translated['2cd0f3be']}
          menuItems={menuItemsTwo}
          onChoose={chooseItemThree}
          onCancel={() => setIsVisible3(false)}
        />
        {/* demo 选项状态 */}
        <ActionSheet
          visible={isVisible4}
          cancelTxt={translated['2cd0f3be']}
          menuItems={menuItemsThree}
          chooseTagValue={translated['85dae65b']}
          onChoose={() => {
            setIsVisible4(false)
          }}
          onCancel={() => setIsVisible4(false)}
        />
        <ActionSheet
          visible={isVisible5}
          cancelTxt={translated['2cd0f3be']}
          chooseTagValue={translated['85dae65b']}
          onChoose={() => {
            setIsVisible5(false)
          }}
          onCancel={() => setIsVisible5(false)}
        >
          <div style={{ textAlign: 'center' }}>1223</div>
        </ActionSheet>
      </div>
    </>
  )
}

export default ActionSheetDemo
