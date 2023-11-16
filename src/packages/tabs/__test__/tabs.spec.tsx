import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tabs } from '../tabs'
import { TabPane } from '../../tabpane/tabpane'

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
        {' '}
        Tab 1{' '}
      </TabPane>
    </Tabs>
  )

  const el: Element | null = container.querySelector('.nut-tabs-titles')
  const el2 = container.querySelectorAll('.nut-tabs-horizontal')
  const el3 = container.querySelectorAll('.nut-tabs-titles')[0]

  expect(el2.length > 0).toBe(true)
  expect(el3).toHaveClass('nut-tabs-titles-smile')
  expect(el3).toHaveClass('nut-tabs-titles-scrollable')
})

test('base other props', () => {
  const { container } = render(
    <Tabs duration={500}>
      <TabPane title="Tab 1"> Tab 1 </TabPane>
    </Tabs>
  )

  const el: Element | null = container.querySelector('.nut-tabs-content')
  expect(el).toHaveAttribute(
    'style',
    'transform: translate3d(-0%, 0, 0); transition-duration: 500ms;'
  )

  setTimeout(() => {
    const el2: Element | null = container.querySelector('.nut-tabs-titles-item')
    expect(el2).toHaveAttribute('style', 'margin-left: 20px;')
  }, 0)
})

test('base Tabpane Props', () => {
  const { container } = render(
    <Tabs value="0">
      <TabPane title="Tab 1" value="0">
        {' '}
        Tab 1{' '}
      </TabPane>
      <TabPane title="Tab 2" value="1" disabled>
        {' '}
        Tab 2{' '}
      </TabPane>
      <TabPane title="Tab 3" value="2">
        {' '}
        Tab 3{' '}
      </TabPane>
    </Tabs>
  )

  const el = container.querySelectorAll('.nut-tabs-titles-item')
  const el2 = container.querySelectorAll('.nut-tabs-titles-item-text')
  expect(el.length === 3).toBe(true)
  expect(el[0]).toHaveClass('nut-tabs-titles-item-active')
  expect(el[1]).toHaveClass('nut-tabs-titles-item-disabled')
  expect(el2[0]).toHaveTextContent('Tab 1')
})

test('base click', () => {
  const handleClick = jest.fn(() => {})
  const { container } = render(
    <Tabs value="0" onClick={handleClick}>
      <TabPane title="Tab 1" value="0">
        {' '}
        Tab 1{' '}
      </TabPane>
      <TabPane title="Tab 2" value="1">
        {' '}
        Tab 2{' '}
      </TabPane>
      <TabPane title="Tab 3" value="2">
        {' '}
        Tab 3{' '}
      </TabPane>
    </Tabs>
  )

  const el = container.querySelectorAll('.nut-tabs-titles-item')[0]
  fireEvent.click(el)
  expect(handleClick).toBeCalled()
})
