import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ActionSheetOption } from '@/types'
import ActionSheet from '@/packages/actionsheet'

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
  expect(chooseTagEle).toHaveClass(
    'nut-actionsheet-item nut-actionsheet-item-danger'
  )
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
  expect(disableItem).toHaveClass(
    'nut-actionsheet-item nut-actionsheet-item-disabled'
  )
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

const gridOptions: ActionSheetOption<React.ReactNode>[] = [
  { name: '素材一', icon: 'https://img11.360buyimg.com/test1.png' },
  { name: '素材二', icon: <span className="custom-icon">icon</span> },
  { name: '素材三' },
]

test('position top renders grid with correct item count', () => {
  const { container } = render(
    <ActionSheet visible position="top" options={gridOptions} />
  )
  expect(container.querySelector('.nut-actionsheet-grid')).toBeTruthy()
  const items = container.querySelectorAll('.nut-actionsheet-grid-item')
  expect(items.length).toBe(3)
})

test('grid item keeps fixed width and column-gap adapts to columns', () => {
  const { container } = render(
    <ActionSheet visible position="top" options={gridOptions} columns={4} />
  )
  const grid = container.querySelector('.nut-actionsheet-grid') as HTMLElement
  expect(grid.style.columnGap).toContain(
    'var(--nutui-actionsheet-grid-item-width, calc(50px * var(--nut-scale-f, 1)))'
  )
  expect(grid.style.columnGap).toContain('/ 3')
})

test('grid icon renders img for string and node for ReactNode', () => {
  const { container } = render(
    <ActionSheet visible position="top" options={gridOptions} />
  )
  const img = container.querySelector('.nut-actionsheet-grid-icon-img')
  expect(img).toBeTruthy()
  expect(img).toHaveAttribute('src', 'https://img11.360buyimg.com/test1.png')
  expect(container.querySelector('.custom-icon')).toBeTruthy()
})

test('clicking grid item triggers onSelect with original item', async () => {
  const choose = vi.fn()
  const { container } = render(
    <ActionSheet
      visible
      position="top"
      options={gridOptions}
      onSelect={choose}
    />
  )
  const items = container.querySelectorAll('.nut-actionsheet-grid-item')
  fireEvent.click(items[0])
  await waitFor(() => expect(choose.mock.calls[0][0].name).toEqual('素材一'))
  expect(choose.mock.calls[0][1]).toEqual(0)
})

test('cancelText renders collapse button in top mode and triggers onCancel', async () => {
  const cancel = vi.fn()
  const { container } = render(
    <ActionSheet
      visible
      position="top"
      options={gridOptions}
      cancelText="点击收起"
      onCancel={cancel}
    />
  )
  const collapse = container.querySelector('.nut-actionsheet-collapse')
  expect(collapse).toBeTruthy()
  expect(collapse).toHaveTextContent('点击收起')
  expect(
    container.querySelector('.nut-actionsheet-collapse-arrow')
  ).toBeTruthy()
  fireEvent.click(collapse as Element)
  await waitFor(() => expect(cancel).toBeCalled())
})

test('titleAlign center renders description, left hides it', () => {
  const { container: centerContainer } = render(
    <ActionSheet
      visible
      title="文本名称"
      description="描述信息"
      titleAlign="center"
    />
  )
  expect(
    centerContainer.querySelector('.nut-actionsheet-header-center')
  ).toBeTruthy()
  expect(
    centerContainer.querySelector('.nut-actionsheet-header-description')
  ).toHaveTextContent('描述信息')

  const { container: leftContainer } = render(
    <ActionSheet
      visible
      title="文本名称"
      description="描述信息"
      titleAlign="left"
    />
  )
  expect(
    leftContainer.querySelector('.nut-actionsheet-header-left')
  ).toBeTruthy()
  expect(
    leftContainer.querySelector('.nut-actionsheet-header-description')
  ).toBeNull()
})

test('headerLeft and headerRight render into their slots', () => {
  const { container } = render(
    <ActionSheet
      visible
      title="清空筛选"
      headerLeft={<span className="left-slot">X</span>}
      headerRight={<span className="right-slot">Y</span>}
    />
  )
  expect(
    container.querySelector('.nut-actionsheet-header-slot-left .left-slot')
  ).toBeTruthy()
  expect(
    container.querySelector('.nut-actionsheet-header-slot-right .right-slot')
  ).toBeTruthy()
})

test('header slot takes precedence over closeable on the same side', () => {
  const { container } = render(
    <ActionSheet
      visible
      title="标题"
      closeable
      closeIconPosition="top-right"
      headerRight={<span className="right-slot">✓</span>}
    />
  )
  // 同侧冲突:关闭按钮不渲染,以 headerRight 槽为准
  expect(container.querySelector('.nut-popup-title-right')).toBeNull()
  expect(container.querySelector('.right-slot')).toBeTruthy()
})

const listIconOptions: ActionSheetOption<React.ReactNode>[] = [
  { name: '文案一', icon: 'https://img11.360buyimg.com/list1.png' },
  { name: '文案二', icon: <span className="custom-list-icon">gift</span> },
  { name: '文案三' },
]

test('bottom list with icon enters icon-list mode', () => {
  const { container } = render(
    <ActionSheet visible options={listIconOptions} />
  )
  expect(container.querySelector('.nut-actionsheet-list-icon')).toBeTruthy()
  expect(container.querySelector('.nut-actionsheet-item-icon')).toBeTruthy()
})

test('icon-list renders img for string and node for ReactNode', () => {
  const { container } = render(
    <ActionSheet visible options={listIconOptions} />
  )
  const img = container.querySelector('.nut-actionsheet-item-icon-img')
  expect(img).toBeTruthy()
  expect(img).toHaveAttribute('src', 'https://img11.360buyimg.com/list1.png')
  expect(container.querySelector('.custom-list-icon')).toBeTruthy()
})

test('clicking icon-list item triggers onSelect with original item', async () => {
  const choose = vi.fn()
  const { container } = render(
    <ActionSheet visible options={listIconOptions} onSelect={choose} />
  )
  const items = container.querySelectorAll(
    '.nut-actionsheet-list .nut-actionsheet-item'
  )
  fireEvent.click(items[0])
  await waitFor(() => expect(choose.mock.calls[0][0].name).toEqual('文案一'))
  expect(choose.mock.calls[0][1]).toEqual(0)
})

test('bottom list without icon stays plain list', () => {
  const { container } = render(
    <ActionSheet visible options={[{ name: '文案一' }, { name: '文案二' }]} />
  )
  expect(container.querySelector('.nut-actionsheet-list')).toBeTruthy()
  expect(container.querySelector('.nut-actionsheet-list-icon')).toBeNull()
  expect(container.querySelector('.nut-actionsheet-item-icon')).toBeNull()
})

test('columns=4 adds cols-4 modifier, columns=5 does not', () => {
  const { container: c4 } = render(
    <ActionSheet visible position="top" options={gridOptions} columns={4} />
  )
  expect(c4.querySelector('.nut-actionsheet-grid-cols-4')).toBeTruthy()

  const { container: c5 } = render(
    <ActionSheet visible position="top" options={gridOptions} columns={5} />
  )
  expect(c5.querySelector('.nut-actionsheet-grid')).toBeTruthy()
  expect(c5.querySelector('.nut-actionsheet-grid-cols-4')).toBeNull()
})

test('layout=grid renders grid even when position is bottom', () => {
  const { container } = render(
    <ActionSheet visible layout="grid" options={gridOptions} />
  )
  expect(container.querySelector('.nut-actionsheet-grid')).toBeTruthy()
  expect(container.querySelector('.nut-actionsheet-list')).toBeNull()
})

test('layout=list renders list even when position is top', () => {
  const { container } = render(
    <ActionSheet visible position="top" layout="list" options={gridOptions} />
  )
  expect(container.querySelector('.nut-actionsheet-list')).toBeTruthy()
  expect(container.querySelector('.nut-actionsheet-grid')).toBeNull()
})

test('layout defaults to grid for top and list for bottom', () => {
  const { container: top } = render(
    <ActionSheet visible position="top" options={gridOptions} />
  )
  expect(top.querySelector('.nut-actionsheet-grid')).toBeTruthy()

  const { container: bottom } = render(
    <ActionSheet visible position="bottom" options={gridOptions} />
  )
  expect(bottom.querySelector('.nut-actionsheet-list')).toBeTruthy()
})

test('bottom grid with icons does not enter icon-list mode', () => {
  const { container } = render(
    <ActionSheet visible layout="grid" options={listIconOptions} />
  )
  expect(container.querySelector('.nut-actionsheet-grid')).toBeTruthy()
  expect(container.querySelector('.nut-actionsheet-list-icon')).toBeNull()
})
