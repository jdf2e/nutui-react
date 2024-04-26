import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ActionSheet, ActionSheetOption } from '../actionsheet'

const menulist: ActionSheetOption<string | boolean>[] = [
  {
    name: '选项一',
    description: '选项一的描述信息',
    danger: true,
  },
  {
    name: '选项二',
    disabled: true,
  },
  {
    name: '必填',
    name1: '选项三',
  },
]

test('props test options ', async () => {
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelText="关闭弹层"
      options={menulist}
    />
  )
  const options = container.querySelectorAll(
    '.nut-actionsheet-list .nut-actionsheet-item'
  )
  expect(options.length).toBe(3)
})

test('props test cancelText ', async () => {
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelText="关闭弹层"
      options={menulist}
    />
  )
  const cancelEle = container.querySelectorAll('.nut-actionsheet-cancel')[0]
  expect(cancelEle).toHaveTextContent('关闭弹层')
})

test('props test has value ', async () => {
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelText="关闭弹层"
      options={menulist}
    />
  )
  const chooseTagEle = container.querySelectorAll(
    '.nut-actionsheet-list .nut-actionsheet-item'
  )[0]
  expect(chooseTagEle).toHaveTextContent('选项一')
  expect(chooseTagEle).toHaveClass('danger')
})

test('props test choose item and show value', async () => {
  const choose = vi.fn()
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelText="关闭弹层"
      options={menulist}
      onSelect={choose}
    />
  )
  const chooseTagEle = container.querySelectorAll(
    '.nut-actionsheet-list .nut-actionsheet-item'
  )[0]
  fireEvent.click(chooseTagEle)
  await waitFor(() => expect(choose.mock.calls[0][0].name).toEqual('选项一'))
})

test('props test disabled item has disabled classes', async () => {
  const choose = vi.fn()
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelText="关闭弹层"
      options={menulist}
      onSelect={choose}
    />
  )
  const options = container.querySelectorAll(
    '.nut-actionsheet-list .nut-actionsheet-item'
  )
  const disableItem = options[1]
  expect(disableItem).toHaveClass('nut-actionsheet-item disabled')
})

test('props test click disabled item and not call fn', async () => {
  const choose = vi.fn()
  const { container } = render(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelText="关闭弹层"
      options={menulist}
      onSelect={choose}
    />
  )
  const options = container.querySelectorAll(
    '.nut-actionsheet-list .nut-actionsheet-item'
  )
  const disableItem = options[1]
  fireEvent.click(disableItem)
  await waitFor(() => expect(choose).not.toBeCalled())
})
