import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ActionSheet, ItemType } from '../actionsheet'

// interface Item {
//   name: string
//   subname?: string
//   disable?: boolean
// }

const menulist: ItemType<string | boolean>[] = [
  {
    name: '选项一',
    subname: '选项一的描述信息',
  },
  {
    name: '选项二',
    disable: true,
  },
  {
    name: '必填',
    name1: '选项三',
  },
]

test('props test menuitems ', async () => {
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelTxt="关闭弹层"
      menuItems={menulist}
      chooseTagValue="选项一"
      color="red"
    />
  )
  const menuItems = container.querySelectorAll(
    '.nut-actionsheet__menu .nut-actionsheet__item'
  )
  expect(menuItems.length).toBe(3)
})

test('props test cancelTxt ', async () => {
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelTxt="关闭弹层"
      menuItems={menulist}
      chooseTagValue="选项一"
      color="red"
    />
  )
  const cancelEle = container.querySelectorAll('.nut-actionsheet__cancel')[0]
  expect(cancelEle).toHaveTextContent('关闭弹层')
})

test('props test has chooseTagValue ', async () => {
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelTxt="关闭弹层"
      menuItems={menulist}
      chooseTagValue="选项一"
      color="red"
    />
  )
  const chooseTagEle = container.querySelectorAll(
    '.nut-actionsheet__menu .nut-actionsheet__item '
  )[0]
  expect(chooseTagEle).toHaveTextContent('选项一')
  expect(chooseTagEle).toHaveStyle('color: red')
})

test('props test choose item and show value', async () => {
  const choose = jest.fn()
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelTxt="关闭弹层"
      menuItems={menulist}
      chooseTagValue="选项一"
      color="red"
      onChoose={choose}
    />
  )
  const chooseTagEle = container.querySelectorAll(
    '.nut-actionsheet__menu .nut-actionsheet__item'
  )[0]
  fireEvent.click(chooseTagEle)
  await waitFor(() => expect(choose.mock.calls[0][0].name).toEqual('选项一'))
})

test('props test disable item has disable classes', async () => {
  const choose = jest.fn()
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelTxt="关闭弹层"
      menuItems={menulist}
      chooseTagValue="选项一"
      color="red"
      onChoose={choose}
    />
  )
  const menuItems = container.querySelectorAll(
    '.nut-actionsheet__menu .nut-actionsheet__item'
  )
  const disableItem = menuItems[1]
  expect(disableItem).toHaveClass('nut-actionsheet__item-disabled')
})

test('props test click disable item and not call fn', async () => {
  const choose = jest.fn()
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelTxt="关闭弹层"
      menuItems={menulist}
      chooseTagValue="选项一"
      color="red"
      onChoose={choose}
    />
  )
  const menuItems = container.querySelectorAll(
    '.nut-actionsheet__menu .nut-actionsheet__item'
  )
  const disableItem = menuItems[1]
  fireEvent.click(disableItem)
  await waitFor(() => expect(choose).not.toBeCalled())
})
