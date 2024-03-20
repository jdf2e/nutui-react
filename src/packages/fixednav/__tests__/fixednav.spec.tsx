import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import FixedNav, { FixedNavItem } from '../index'

const list: FixedNavItem[] = [
  {
    id: 1,
    text: '首页',
    icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png',
  },
  {
    id: 2,
    text: '分类',
    icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
  },
  {
    id: 3,
    text: '购物车',
    num: 2,
    icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png',
  },
  {
    id: 4,
    text: '我的',
    icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png',
  },
]

test('basic usage', () => {
  const { container } = render(<FixedNav list={list} />)
  expect(container.querySelector('.nut-fixednav')).toHaveClass('right')
})

test('left nav', () => {
  const { container } = render(<FixedNav list={list} type="left" />)
  expect(container.querySelector('.nut-fixednav')).toHaveClass('left')
})

test('should be displayed after setting the un-active-text', () => {
  const { container } = render(
    <FixedNav
      list={list}
      type="left"
      activeText="左侧收起"
      inactiveText="左侧展开"
    />
  )
  expect(container.querySelector('.nut-fixednav .text')).toHaveTextContent(
    '左侧展开'
  )
})

test('should be displayed after setting the un-active-text', () => {
  const activeFixedNav = vi.fn()
  const { container } = render(
    <FixedNav
      list={list}
      type="left"
      activeText="左侧收起"
      inactiveText="左侧展开"
      onChange={activeFixedNav}
    />
  )
  fireEvent.click(screen.getByText(/左侧展开/i))
  expect(activeFixedNav).toHaveBeenCalledTimes(1)
  screen.findByText('左侧收起')
})

test('should be displayed after setting the position', () => {
  const { getByTestId } = render(
    <FixedNav
      data-testid="fixednav-top"
      list={list}
      position={{ top: '280px' }}
    />
  )
  expect(getByTestId('fixednav-top').style.top).toBe('280px')
})
