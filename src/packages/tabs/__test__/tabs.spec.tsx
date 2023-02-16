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
    <Tabs
      value="0"
      background="#f5f5f5"
      color="#f5f5f5"
      direction="horizontal"
      type="smile"
      size="large"
      titleScroll
    >
      <TabPane title="Tab 1" paneKey="0">
        {' '}
        Tab 1{' '}
      </TabPane>
    </Tabs>
  )

  const el: Element | null = container.querySelector('.nut-tabs__titles')
  const el2 = container.querySelectorAll('.horizontal')
  const el3 = container.querySelectorAll('.nut-tabs__titles')[0]

  expect(el).toHaveAttribute('style', 'background: rgb(245, 245, 245);')
  expect(el2.length > 0).toBe(true)
  expect(el3).toHaveClass('smile')
  expect(el3).toHaveClass('large')
  expect(el3).toHaveClass('scrollable')
})

test('base other props', () => {
  const { container } = render(
    <Tabs animatedTime={500} titleGutter="20px">
      <TabPane title="Tab 1"> Tab 1 </TabPane>
    </Tabs>
  )

  const el: Element | null = container.querySelector('.nut-tabs__content')
  expect(el).toHaveAttribute(
    'style',
    'transform: translate3d(-0%, 0, 0); transition-duration: 500ms;'
  )

  setTimeout(() => {
    const el2: Element | null = container.querySelector(
      '.nut-tabs__titles-item'
    )
    expect(el2).toHaveAttribute('style', 'margin-left: 20px;')
  }, 0)
})

test('base Tabpane Props', () => {
  const { container } = render(
    <Tabs value="0">
      <TabPane title="Tab 1" paneKey="0">
        {' '}
        Tab 1{' '}
      </TabPane>
      <TabPane title="Tab 2" paneKey="1" disabled>
        {' '}
        Tab 2{' '}
      </TabPane>
      <TabPane title="Tab 3" paneKey="2">
        {' '}
        Tab 3{' '}
      </TabPane>
    </Tabs>
  )

  const el = container.querySelectorAll('.nut-tabs__titles-item')
  const el2 = container.querySelectorAll('.nut-tabs__titles-item__text')
  expect(el.length === 3).toBe(true)
  expect(el[0]).toHaveClass('active')
  expect(el[1]).toHaveClass('disabled')
  expect(el2[0]).toHaveTextContent('Tab 1')
})

test('base click', () => {
  const handleClick = jest.fn(() => {})
  const { container } = render(
    <Tabs value="0" onClick={handleClick}>
      <TabPane title="Tab 1" paneKey="0">
        {' '}
        Tab 1{' '}
      </TabPane>
      <TabPane title="Tab 2" paneKey="1">
        {' '}
        Tab 2{' '}
      </TabPane>
      <TabPane title="Tab 3" paneKey="2">
        {' '}
        Tab 3{' '}
      </TabPane>
    </Tabs>
  )

  const el = container.querySelectorAll('.nut-tabs__titles-item')[0]
  fireEvent.click(el)
  expect(handleClick).toBeCalled()
})
