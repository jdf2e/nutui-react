import React, { useState } from 'react'
import { ActionSheet, ItemType } from './actionsheet'
import Cell from '@/packages/cell'
interface Item {
  name: string
  subname?: string
  disable?: boolean
}

const ActionSheetDemo = () => {
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
      subname: '描述信息',
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
        <h2>基本用法</h2>
        <Cell isLink={true} onClick={() => setIsVisible1(!isVisible1)}>
          <span>
            <label>基础用法</label>
          </span>
          <div className="selected-option">{val1}</div>
        </Cell>
        <Cell isLink={true} onClick={() => setIsVisible2(!isVisible2)}>
          <span>
            <label>展示取消按钮</label>
          </span>
          <div className="selected-option">{val2}</div>
        </Cell>
        <Cell isLink={true} onClick={() => setIsVisible3(!isVisible3)}>
          <span>
            <label>展示描述信息</label>
          </span>
          <div className="selected-option">{val3}</div>
        </Cell>
        <h2>选项状态</h2>

        <Cell isLink={true} onClick={() => setIsVisible4(!isVisible4)}>
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
        ></ActionSheet>
        {/* demo(带取消按钮） */}
        <ActionSheet
          visible={isVisible2}
          cancelTxt="取消"
          menuItems={menuItemsOne}
          choose={chooseItemTwo}
          cancel={() => setIsVisible2(false)}
        ></ActionSheet>
        {/* 展示描述信息 */}
        <ActionSheet
          visible={isVisible3}
          description="这是一段描述信息"
          menuItems={menuItemsTwo}
          choose={chooseItemThree}
          cancelTxt="取消"
          cancel={() => setIsVisible3(false)}
        ></ActionSheet>
        {/* demo 选项状态 */}
        <ActionSheet
          visible={isVisible4}
          cancelTxt="取消"
          cancel={() => setIsVisible4(false)}
          menuItems={menuItemsThree}
          chooseTagValue="着色选项"
          choose={() => {
            setIsVisible4(false)
          }}
        ></ActionSheet>
      </div>
    </>
  )
}

export default ActionSheetDemo
