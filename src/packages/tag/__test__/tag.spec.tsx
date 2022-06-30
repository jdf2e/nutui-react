import * as React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Tag, TagType } from '../tag'

test('color test', () => {
  const state = {
    color: 'rgb(250, 104, 93)',
  }
  const { container } = render(<Tag color={state.color} />)
  expect(container.querySelector('.nut-tag--default')?.getAttribute('style')).toBe(
    'background: rgb(250, 104, 93);'
  )
})

test('type test', () => {
  const state: {
    type: TagType
  } = {
    type: 'primary',
  }
  const { container } = render(<Tag type={state.type} />)
  const el: any = container.querySelector('.nut-tag--primary')
  expect(window.getComputedStyle(el).backgroundColor).toBe('rgb(52, 96, 250)')
})

test('type test', () => {
  const state: {
    type: TagType
  } = {
    type: 'primary',
  }
  const { container } = render(<Tag type={state.type} />)
  const el: any = container.querySelector('.nut-tag--primary')
  expect(window.getComputedStyle(el).backgroundColor).toBe('rgb(52, 96, 250)')
})

test('plain test', () => {
  const state = {
    plain: true,
  }
  const { container } = render(<Tag plain={state.plain} />)
  const el: any = container.querySelectorAll('.nut-tag--plain').length
  expect(el > 0).toBe(true)
})

test('round test', () => {
  const state = {
    round: true,
  }
  const { container } = render(<Tag round={state.round} />)
  const el: any = container.querySelectorAll('.nut-tag--round')[0]
  expect(window.getComputedStyle(el).borderRadius).toBe('8px')
})

test('mark test', () => {
  const state = {
    mark: true,
  }
  const { container } = render(<Tag mark={state.mark} />)
  const el: any = container.querySelectorAll('.nut-tag--mark')[0]
  expect(window.getComputedStyle(el).borderRadius).toBe('0px 12px 12px 0px')
})

test('closeable && isShow test', () => {
  const state = {
    closeable: true,
    isShow: true,
  }
  const { container } = render(<Tag closeable={state.closeable} isShow={state.isShow} />)
  const el: any = container.querySelectorAll('.nut-tag--close')[0]
  const icon: any = el.childNodes[1]
  fireEvent.click(icon)
  expect(el?.length > 0).toBe(false)
})

test('emit click event', () => {
  const testClick = jest.fn()
  const { getByTestId } = render(<Tag data-testid="tag-click" onClick={() => testClick()} />)
  fireEvent.click(getByTestId('tag-click'))
  expect(testClick).toBeCalled()
})
