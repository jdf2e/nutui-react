import React, { useState } from 'react'
import { ActionSheet, ItemType } from './actionsheet'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'

interface Item {
  name: string
  subname?: string
  disable?: boolean
}

const ActionSheetDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      cancel: '取消',
    },
    'en-US': {
      basic: 'Basic Usage',
      cancel: 'Cancel',
    },
  })

  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [val3, setVal3] = useState('')
  const menuItemsOne: ItemType<string>[] = [
    {
      name: '选项一',
    },
    {
      name: '选项二',
    },
    {
      name: '选项三',
    },
  ]
  const menuItemsTwo: ItemType<string>[] = [
    {
      name: '选项一',
    },
    {
      name: '选项二',
    },
    {
      name: '选项三',
      subname: 'Description Info',
    },
  ]
  const menuItemsThree: ItemType<string | boolean>[] = [
    {
      name: '着色选项',
    },
    {
      name: '禁用选项',
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
        <h2>{translated.basic}</h2>
        <Cell isLink onClick={() => setIsVisible1(!isVisible1)}>
          <span>
            <label>{translated.basic}</label>
          </span>
          <div className="selected-option">{val1}</div>
        </Cell>
        <Cell isLink onClick={() => setIsVisible2(!isVisible2)}>
          <span>
            <label>展示取消按钮</label>
          </span>
          <div className="selected-option">{val2}</div>
        </Cell>
        <Cell isLink onClick={() => setIsVisible3(!isVisible3)}>
          <span>
            <label>展示描述信息</label>
          </span>
          <div className="selected-option">{val3}</div>
        </Cell>
        <h2>选项状态</h2>

        <Cell isLink onClick={() => setIsVisible4(!isVisible4)}>
          <span>
            <label>选项状态</label>
          </span>
        </Cell>

        {/* demo 基础用法 */}
        <ActionSheet
          visible={isVisible1}
          menuItems={menuItemsOne}
          choose={chooseItem}
          cancel={() => setIsVisible1(false)}
        />
        {/* demo(带取消按钮） */}
        <ActionSheet
          visible={isVisible2}
          cancelTxt={translated.basic}
          menuItems={menuItemsOne}
          choose={chooseItemTwo}
          cancel={() => setIsVisible2(false)}
        />
        {/* 展示描述信息 */}
        <ActionSheet
          visible={isVisible3}
          description="这是一段描述信息"
          menuItems={menuItemsTwo}
          choose={chooseItemThree}
          cancelTxt={translated.basic}
          cancel={() => setIsVisible3(false)}
        />
        {/* demo 选项状态 */}
        <ActionSheet
          visible={isVisible4}
          cancelTxt={translated.basic}
          cancel={() => setIsVisible4(false)}
          menuItems={menuItemsThree}
          chooseTagValue="着色选项"
          choose={() => {
            setIsVisible4(false)
          }}
        />
      </div>
    </>
  )
}

export default ActionSheetDemo
