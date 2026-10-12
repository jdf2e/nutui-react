import * as React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tabs } from '../tabs'
import { TabPane } from '../../tabpane/tabpane'
import { getCardFlushSides } from '../utils'

test('base Tabs', () => {
  const { getByTestId } = render(
    <Tabs data-testid="tabs1">
      <TabPane title="Tab 1"> Tab 1 </TabPane>
    </Tabs>
  )
  expect(getByTestId('tabs1')).toHaveClass('nut-tabs')
})

test('base tabs props', () => {
  const { container } = render(
    <Tabs value="0" direction="horizontal" activeType="smile">
      <TabPane title="Tab 1" value="0">
        Tab 1
      </TabPane>
    </Tabs>
  )
  const el2 = container.querySelectorAll('.nut-tabs-horizontal')
  const el3 = container.querySelectorAll('.nut-tabs-titles')[0]

  expect(el2.length > 0).toBe(true)
  expect(el3).toHaveClass('nut-tabs-titles-smile')
  expect(el3).not.toHaveClass('nut-tabs-titles-scrollable')
})

test('card flush sides follow scrollable, align and rtl', () => {
  // 可滑动(未设置 align):首项贴物理左端、末项贴物理右端
  expect(getCardFlushSides(0, 3, { scrollable: true, rtl: false })).toEqual({
    left: true,
    right: false,
  })
  expect(getCardFlushSides(2, 3, { scrollable: true, rtl: false })).toEqual({
    left: false,
    right: true,
  })
  expect(getCardFlushSides(1, 3, { scrollable: true, rtl: false })).toEqual({
    left: false,
    right: false,
  })
  // RTL 镜像:首项贴物理右端、末项贴物理左端
  expect(getCardFlushSides(0, 3, { scrollable: true, rtl: true })).toEqual({
    left: false,
    right: true,
  })
  expect(getCardFlushSides(2, 3, { scrollable: true, rtl: true })).toEqual({
    left: true,
    right: false,
  })
  // 不可滑动:内容靠向 align 一侧,只有贴靠该侧的那一项才贴边
  expect(
    getCardFlushSides(0, 3, { scrollable: false, rtl: false, align: 'left' })
  ).toEqual({ left: true, right: false })
  expect(
    getCardFlushSides(2, 3, { scrollable: false, rtl: false, align: 'left' })
  ).toEqual({ left: false, right: false })
  expect(
    getCardFlushSides(2, 3, { scrollable: false, rtl: false, align: 'right' })
  ).toEqual({ left: false, right: true })
  expect(
    getCardFlushSides(0, 3, { scrollable: false, rtl: true, align: 'left' })
  ).toEqual({ left: false, right: true })
  expect(
    getCardFlushSides(2, 3, { scrollable: false, rtl: true, align: 'right' })
  ).toEqual({ left: true, right: false })
  // 单项卡片两端同时贴边
  expect(getCardFlushSides(0, 1, { scrollable: true, rtl: false })).toEqual({
    left: true,
    right: true,
  })
})

test('card tabs apply flush modifier to active item', () => {
  const { container } = render(
    <Tabs value="0" activeType="card">
      <TabPane title="Tab 1" value="0">
        Tab 1
      </TabPane>
      <TabPane title="Tab 2" value="1">
        Tab 2
      </TabPane>
    </Tabs>
  )
  const titles = container.querySelectorAll('.nut-tabs-titles')[0]
  expect(titles).not.toHaveClass('nut-tabs-titles-scrollable')
  expect(titles).not.toHaveClass('nut-tabs-titles-not-scrollable')

  const items = container.querySelectorAll('.nut-tabs-titles-item')
  expect(items[0]).toHaveClass('nut-tabs-titles-item-active--flush-left')
  expect(items[0]).not.toHaveClass('nut-tabs-titles-item-active--flush-right')
})

test('card tabs flush modifier honours align when not scrollable', () => {
  const { container } = render(
    <Tabs value="1" activeType="card" align="right">
      <TabPane title="Tab 1" value="0">
        Tab 1
      </TabPane>
      <TabPane title="Tab 2" value="1">
        Tab 2
      </TabPane>
    </Tabs>
  )
  const items = container.querySelectorAll('.nut-tabs-titles-item')
  expect(items[1]).toHaveClass('nut-tabs-titles-item-active--flush-right')
  expect(items[1]).not.toHaveClass('nut-tabs-titles-item-active--flush-left')
})

test('base tabs props', () => {
  const { container } = render(
    <Tabs value="0" direction="horizontal" activeType="card">
      <TabPane title="Tab 1" value="0">
        Tab 1
      </TabPane>
    </Tabs>
  )
  const el3 = container.querySelectorAll('.nut-tabs-titles')[0]
  expect(el3).toHaveClass('nut-tabs-titles-card')
})

test('button type tabs', () => {
  const { container } = render(
    <Tabs value="0" activeType="button">
      <TabPane title="Tab 1" value="0">
        Tab 1
      </TabPane>
      <TabPane title="Tab 2" value="1">
        Tab 2
      </TabPane>
    </Tabs>
  )
  const titles = container.querySelectorAll('.nut-tabs-titles')[0]
  expect(titles).toHaveClass('nut-tabs-titles-button')

  const items = container.querySelectorAll('.nut-tabs-titles-item')
  const texts = container.querySelectorAll('.nut-tabs-titles-item-text')
  expect(items[0]).toHaveClass('nut-tabs-titles-item-active')
  expect(items[1]).not.toHaveClass('nut-tabs-titles-item-active')
  expect(texts.length).toBe(2)
  expect(texts[0]).toHaveTextContent('Tab 1')
})

test('base other props', async () => {
  const { container } = render(
    <Tabs duration={500}>
      <TabPane title="Tab 1"> Tab 1 </TabPane>
      <TabPane title="Tab 2"> Tab 2 </TabPane>
    </Tabs>
  )

  const el: Element | null = container.querySelector('.nut-tabs-content')
  expect(el).toHaveAttribute(
    'style',
    'transform: translate3d(-0%, 0, 0); transition-duration: 500ms;'
  )
  const el2 = container.querySelectorAll('.nut-tabs-titles-item')[1]
  fireEvent.click(el2)
  let el3: Element | null
  setTimeout(() => {
    el3 = container.querySelector('.nut-tabs-content')
  }, 600)
  await waitFor(() => {
    expect(el3).toHaveAttribute(
      'style',
      'transform: translate3d(-100%, 0, 0); transition-duration: 500ms;'
    )
  })
})

test('base Tabpane Props', () => {
  const { container, rerender } = render(
    <Tabs value="0">
      <TabPane title="Tab 1" value="0">
        Tab 1
      </TabPane>
      <TabPane title="Tab 2" value="1" disabled>
        Tab 2
      </TabPane>
      <TabPane title="Tab 3" value="2">
        Tab 3
      </TabPane>
    </Tabs>
  )
  const el = container.querySelectorAll('.nut-tabs-titles-item')
  const el2 = container.querySelectorAll('.nut-tabs-titles-item-text')
  expect(el.length === 3).toBe(true)
  expect(el[0]).toHaveClass('nut-tabs-titles-item-active')
  expect(el[1]).toHaveClass('nut-tabs-titles-item-disabled')
  expect(el2[0]).toHaveTextContent('Tab 1')

  rerender(
    <Tabs value="0">
      <TabPane title="Tab 1" value="0" />
      <TabPane title="Tab 2" value="1" disabled />
      <TabPane title="Tab 3" value="2" />
    </Tabs>
  )
  expect(container.querySelectorAll('.nut-tabpane').length).toBe(0)
})

test('base Tabpane autoHeight Props', () => {
  const { container } = render(
    <Tabs value="0" autoHeight>
      <TabPane title="Tab 1" value="0">
        Tab 1
      </TabPane>
      <TabPane title="Tab 2" value="1">
        Tab 2
      </TabPane>
    </Tabs>
  )
  const el = container.querySelectorAll('.nut-tabpane')
  expect(el[1]).toHaveClass('nut-tabpane inactive')
})

test('base children isnot valid element', () => {
  const handleClick = vi.fn(() => {})
  const { container } = render(
    <Tabs value="0" onClick={handleClick}>
      333
    </Tabs>
  )
  const el = container.querySelectorAll('.nut-tabs-content')[0].children
  expect(el.length).toBe(0)
})

test('base click', () => {
  const handleClick = vi.fn(() => {})
  const { container } = render(
    <Tabs value="0" onClick={handleClick}>
      <TabPane title="Tab 1" value="0">
        Tab 1
      </TabPane>
      <TabPane title="Tab 2" value="1" disabled>
        Tab 2
      </TabPane>
      <TabPane title="Tab 3" value="2">
        Tab 3
      </TabPane>
    </Tabs>
  )

  const el = container.querySelectorAll('.nut-tabs-titles-item')[0]
  fireEvent.click(el)
  expect(handleClick).toBeCalled()

  const el2 = container.querySelectorAll('.nut-tabs-titles-item')[1]
  fireEvent.click(el2)
  expect(handleClick).toBeCalled()
})

test('click tab when have many tabs', async () => {
  const handleClick = vi.fn(() => {})
  const { container } = render(
    <Tabs value="0" onClick={handleClick} direction="vertical">
      <TabPane title="Tab 1" value="0">
        Tab 1
      </TabPane>
      <TabPane title="Tab 2" value="1">
        Tab 2
      </TabPane>
      <TabPane title="Tab 3" value="2">
        Tab 3
      </TabPane>
      <TabPane title="Tab 11" value="01">
        Tab 11
      </TabPane>
      <TabPane title="Tab 22" value="12">
        Tab 22
      </TabPane>
      <TabPane title="Tab 33" value="23">
        Tab 33
      </TabPane>
    </Tabs>
  )

  const el = container.querySelectorAll('.nut-tabs-titles-item')[5]
  fireEvent.click(el)
  await waitFor(() => expect(expect(handleClick).toBeCalled()))
})
