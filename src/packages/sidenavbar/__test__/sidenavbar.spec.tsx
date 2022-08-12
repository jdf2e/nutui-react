import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Sidenavbar from '@/packages/sidenavbar'

const changeNarBar = jest.fn((vis: boolean) => {
  console.log('changeNarBar>>>>', vis)
})

test('default props', () => {
  const { container } = render(
    <>
      <Sidenavbar
        title="首页"
        visible
        handleClose={() => {
          changeNarBar(false)
        }}
      >
        侧边栏内容
      </Sidenavbar>
    </>
  )
  expect(container.querySelector('.nut-popup')).toHaveClass('popup-left')
  expect(container.querySelector('.nut-sidenavbar__title')).toHaveAttribute(
    'style',
    'padding-left: 20px;'
  )
})
test('position  should be right', () => {
  const { container } = render(
    <>
      <Sidenavbar
        title="首页"
        visible
        position="right"
        handleClose={() => {
          changeNarBar(false)
        }}
      >
        侧边栏内容
      </Sidenavbar>
    </>
  )
  expect(container.querySelector('.nut-popup')).toHaveClass('popup-right')
})
test('offset  should be 30', () => {
  const { container } = render(
    <>
      <Sidenavbar
        title="首页"
        visible
        position="left"
        offset={30}
        handleClose={() => {
          changeNarBar(false)
        }}
      >
        侧边栏内容
      </Sidenavbar>
    </>
  )
  expect(container.querySelector('.nut-sidenavbar__title')).toHaveAttribute(
    'style',
    'padding-left: 30px;'
  )
})
