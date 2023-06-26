import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { ActionSheet, Cell } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

export type ItemType<T> = { [key: string]: T }
interface Item {
  name: string
  description?: string
  disabled?: boolean
  danger?: boolean
}

interface T {
  '0f87771f': string
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
  '2cd0f3be': string
  e1699442: string
  c3a08065: string
  c3a08066: string
}
const ActionSheetDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '0f87771f': '标题',
      '0f87770f': '权限设置',
      e23e5e80: '重命名',
      b6102b61: '删除',
      acc5939e: '删除后无法恢复',
      '85dae65b': '着色选项',
      '314631ed': '禁用选项',
      '74fc5d8a': '基础用法',
      '84aa6bce': '基础用法',
      '595d7bb3': '展示取消按钮',
      '0a1a6656': '展示描述信息',
      c3a08064: '选项状态',
      '2cd0f3be': '取消',
      e1699442: '请选择操作动作',
      c3a08065: '自定义内容',
      c3a08066: '自定义key',
    },
    'zh-TW': {
      '0f87771f': '標題',
      '0f87770f': '權限設定',
      e23e5e80: '重命名',
      b6102b61: '刪除',
      acc5939e: '刪除後無法恢復',
      '85dae65b': '著色選項',
      '314631ed': '禁用選項',
      '74fc5d8a': '基础用法',
      '84aa6bce': '基礎用法',
      '595d7bb3': '展示取消按鈕',
      '0a1a6656': '展示描述信息',
      c3a08064: '選項狀態',
      '2cd0f3be': '取消',
      e1699442: '請選擇操作動作',
      c3a08065: '自定義內容',
      c3a08066: '自定義key',
    },
    'en-US': {
      '0f87771f': 'Title',
      '0f87770f': 'Permission settings',
      e23e5e80: 'Rename',
      b6102b61: 'Delete',
      acc5939e: 'Cannot be restored after deletion',
      '85dae65b': 'Shading Options',
      '314631ed': 'Disable Option',
      '74fc5d8a': 'Basic Usage',
      '84aa6bce': 'Basic Usage',
      '595d7bb3': 'Show Cancel Button',
      '0a1a6656': 'Display Description Information',
      c3a08064: 'Option Status',
      '2cd0f3be': 'Cancel',
      e1699442: 'Please choose action',
      c3a08065: 'Custom content',
      c3a08066: 'Custom key',
    },
  })

  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  const [isVisible5, setIsVisible5] = useState(false)
  const [isVisible6, setIsVisible6] = useState(false)
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [val3, setVal3] = useState('')
  const optionsOne: ItemType<string>[] = [
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
  const optionsTwo: ItemType<string>[] = [
    {
      name: translated['0f87770f'],
    },
    {
      name: translated.e23e5e80,
    },
    {
      name: translated.b6102b61,
      description: translated.acc5939e,
    },
  ]
  const optionsThree: ItemType<string | boolean>[] = [
    {
      name: translated['85dae65b'],
      danger: true,
    },
    {
      name: translated['314631ed'],
      disabled: true,
    },
  ]
  const optionsFour: ItemType<string | boolean>[] = [
    {
      title: translated['0f87770f'],
    },
    {
      title: translated.e23e5e80,
    },
    {
      title: translated.b6102b61,
      danger: true,
    },
  ]
  const optionKey = {
    name: 'title',
  }
  const chooseItem = (item: ItemType<string>) => {
    setVal1(item.name)
    setIsVisible1(false)
  }
  const chooseItemTwo = (item: Item) => {
    setVal2(item.name)
    setIsVisible2(false)
  }
  const chooseItemThree = (item: Item) => {
    setVal3(item.name)
    setIsVisible3(false)
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated['74fc5d8a']}</h2>
        <Cell onClick={() => setIsVisible1(!isVisible1)}>
          <span>
            <label htmlFor={translated['84aa6bce']}>
              {translated['84aa6bce']}
            </label>
          </span>
          <div style={{ marginLeft: '10px' }}>{val1}</div>
        </Cell>
        <Cell onClick={() => setIsVisible2(!isVisible2)}>
          <span>
            <label htmlFor={translated['595d7bb3']}>
              {translated['595d7bb3']}
            </label>
          </span>
          <div style={{ marginLeft: '10px' }}>{val2}</div>
        </Cell>
        <Cell onClick={() => setIsVisible3(!isVisible3)}>
          <span>
            <label htmlFor={translated['0a1a6656']}>
              {translated['0a1a6656']}
            </label>
          </span>
          <div style={{ marginLeft: '10px' }}>{val3}</div>
        </Cell>
        <h2>{translated.c3a08064}</h2>
        <Cell onClick={() => setIsVisible4(!isVisible4)}>
          <span>
            <label htmlFor={translated.c3a08064}>{translated.c3a08064}</label>
          </span>
        </Cell>
        <h2>{translated.c3a08065}</h2>
        <Cell onClick={() => setIsVisible5(!isVisible5)}>
          <span>
            <label htmlFor={translated.c3a08065}>{translated.c3a08065}</label>
          </span>
        </Cell>
        <h2>{translated.c3a08066}</h2>
        <Cell onClick={() => setIsVisible6(!isVisible6)}>
          <span>
            <label htmlFor={translated.c3a08066}>{translated.c3a08066}</label>
          </span>
        </Cell>

        {/* demo 基础用法 */}
        <ActionSheet
          title={translated['0f87771f']}
          visible={isVisible1}
          options={optionsOne}
          onSelect={(item: any) => {
            chooseItem(item)
          }}
          onCancel={() => setIsVisible1(false)}
        />
        {/* demo(带取消按钮） */}
        <ActionSheet
          visible={isVisible2}
          cancelText={translated['2cd0f3be']}
          options={optionsOne}
          onSelect={(item: any) => {
            chooseItemTwo(item)
          }}
          onCancel={() => setIsVisible2(false)}
        />
        {/* 展示描述信息 */}
        <ActionSheet
          visible={isVisible3}
          title={translated['0f87771f']}
          description={translated.e1699442}
          cancelText={translated['2cd0f3be']}
          options={optionsTwo}
          onSelect={(item: any) => {
            chooseItemThree(item)
          }}
          onCancel={() => setIsVisible3(false)}
        />
        {/* demo 选项状态 */}
        <ActionSheet
          visible={isVisible4}
          cancelText={translated['2cd0f3be']}
          options={optionsThree}
          onSelect={() => {
            setIsVisible4(false)
          }}
          onCancel={() => setIsVisible4(false)}
        />
        <ActionSheet
          visible={isVisible5}
          cancelText={translated['2cd0f3be']}
          onSelect={() => {
            setIsVisible5(false)
          }}
          onCancel={() => setIsVisible5(false)}
        >
          <div style={{ textAlign: 'left', padding: '10px 20px' }}>
            新建表格
          </div>
          <div style={{ textAlign: 'left', padding: '10px 20px' }}>
            新建文档
          </div>
        </ActionSheet>
        <ActionSheet
          visible={isVisible6}
          cancelText={translated['2cd0f3be']}
          optionKey={optionKey}
          options={optionsFour}
          onSelect={() => {
            setIsVisible6(false)
          }}
          onCancel={() => setIsVisible6(false)}
        />
      </div>
    </>
  )
}

export default ActionSheetDemo
