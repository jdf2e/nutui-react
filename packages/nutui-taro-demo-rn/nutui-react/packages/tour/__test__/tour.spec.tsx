import * as React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Tour } from '../tour'

const steps = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'target',
  },
]

const steps2 = [
  {
    content: '支持一套代码同时开发多端小程序+H5',
    target: 'target2',
    popoverOffset: [40, 12],
    arrowOffset: -36,
  },
]

const steps3 = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'target3',
  },
]

const steps4 = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'target4',
  },
  {
    content: '支持一套代码同时开发多端小程序+H5',
    target: 'target5',
  },
  {
    content: '基于京东APP 10.0 视觉规范',
    target: 'target6',
    location: 'top-end',
  },
  {
    content: '支持定制主题，内置 700+ 个主题变量',
    target: 'target7',
    location: 'top-end',
  },
]

test('base render', () => {
  const root = document.createElement('div')
  root.id = 'target'
  const { container } = render(
    <Tour visible list={steps} type="tile" location="bottom-end" />
  )
  expect(document.querySelector('.nut-popover')).toBeTruthy()
  expect(document.querySelector('.nut-popover-content-bottom-end')).toBeTruthy()
})

test('custom style', () => {
  const root = document.createElement('div')
  root.id = 'target'
  const { container } = render(
    <Tour
      visible
      list={steps}
      type="tile"
      location="bottom-end"
      style={{
        '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
        '--nutui-popover-text-color': 'rgb(255, 255, 255)',
        '--nutui-popover-border-color': 'rgb(255, 0, 0)',
      }}
      offset={[0, 0]}
      maskWidth={50}
      maskHeight={50}
    />
  )
  const tourComponent = container.querySelectorAll('.nut-tour')[0]
  expect(tourComponent).toHaveStyle({
    '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
  })
})

test('custom offset', () => {
  const root = document.createElement('div')
  root.id = 'target2'
  const { container } = render(
    <Tour
      visible
      list={steps2}
      type="tile"
      location="bottom-end"
      style={{
        '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
        '--nutui-popover-text-color': 'rgb(255, 255, 255)',
        '--nutui-popover-border-color': 'rgb(255, 0, 0)',
      }}
      offset={[8, 8]}
    />
  )
  const tourArrow = document.querySelectorAll('.nut-popover-arrow')[0]
  expect(tourArrow).toHaveStyle({ right: '52px' })
})

test('slot render', () => {
  const root = document.createElement('div')
  root.id = 'target3'
  const { container } = render(
    <Tour
      visible
      list={steps3}
      type="tile"
      location="bottom-end"
      offset={[8, 8]}
      style={{
        '--nutui-popover-content-background-color': 'rgb(75, 76, 77)',
        '--nutui-popover-text-color': 'rgb(255, 255, 255)',
        '--nutui-popover-border-color': 'rgb(75, 76, 77)',
      }}
    >
      <div className="tour-demo-custom-content">
        <div>nutui 4.x 即将发布，敬请期待</div>
      </div>
    </Tour>
  )
  const tourArrow = document.querySelectorAll('.nut-popover-content-group')[0]
  expect(tourArrow).toHaveTextContent('nutui 4.x 即将发布，敬请期待')
})

test('steps render', async () => {
  const root = document.createElement('div')
  root.id = 'target4'
  const root1 = document.createElement('div')
  root1.id = 'target5'
  const { container } = render(
    <Tour visible list={steps4} location="bottom-end" />
  )
  const btn = document.querySelectorAll(
    '.nut-tour-content-bottom-operate-btn'
  )[0]
  expect(btn).toBeTruthy()
  fireEvent.click(btn)

  await waitFor(() => {
    const btn2 = document.querySelectorAll(
      '.nut-tour-content-bottom-operate-btn'
    )
    expect(btn2.length).toBe(2)
  })
})
