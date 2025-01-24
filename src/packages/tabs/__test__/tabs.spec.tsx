import * as React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tabs } from '../tabs'
import { TabPane } from '../../tabpane/tabpane'

test('base Tabs', () => {
  const { getByTestId } = render(
    <Tabs data-testid="tabs1">
      <TabPane title="Tab longitem"> Tab longitem </TabPane>
    </Tabs>
  )
  expect(getByTestId('tabs1')).toHaveClass('nut-tabs')
})

test('base tabs props', () => {
  const { container } = render(
    <Tabs value="0" direction="horizontal" activeType="smile">
      <TabPane title="Tab longitem" value="0">
        Tab longitem
      </TabPane>
    </Tabs>
  )
  const el2 = container.querySelectorAll('.nut-tabs-horizontal')
  const el3 = container.querySelectorAll('.nut-tabs-titles')[0]

  expect(el2.length > 0).toBe(true)
  expect(el3).toHaveClass('nut-tabs-titles-smile')
})

test('base tabs props', () => {
  const { container } = render(
    <Tabs value="0" direction="horizontal" activeType="card">
      <TabPane title="Tab longitem" value="0">
        Tab longitem
      </TabPane>
    </Tabs>
  )
  const el3 = container.querySelectorAll('.nut-tabs-titles')[0]
  expect(el3).toHaveClass('nut-tabs-titles-card')
})

test('base other props', async () => {
  const { container } = render(
    <Tabs duration={500}>
      <TabPane title="Tab longitem"> Tab longitem </TabPane>
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
  const { container } = render(
    <Tabs value="0">
      <TabPane title="Tab longitem" value="0">
        Tab longitem
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
  expect(el2[0]).toHaveTextContent('Tab longitem')
})

test('base Tabpane autoHeight Props', () => {
  const { container } = render(
    <Tabs value="0" autoHeight>
      <TabPane title="Tab longitem" value="0">
        Tab longitem
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
      <TabPane title="Tab longitem" value="0">
        Tab longitem
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
      <TabPane title="Tab longitem" value="0">
        Tab longitem
      </TabPane>
      <TabPane title="Tab 2" value="1">
        Tab 2
      </TabPane>
      <TabPane title="Tab 3" value="2">
        Tab 3
      </TabPane>
      <TabPane title="Tab longitem1" value="01">
        Tab longitem1
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
