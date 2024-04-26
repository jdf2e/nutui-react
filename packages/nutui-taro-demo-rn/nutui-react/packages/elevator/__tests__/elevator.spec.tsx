import * as React from 'react'
import { render, fireEvent, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Elevator } from '../elevator'

const list = [
  {
    title: 'A',
    list: [
      {
        name: '安徽',
        id: 1,
      },
    ],
  },
  {
    title: 'B',
    list: [
      {
        name: '北京',
        id: 2,
      },
    ],
  },
  {
    title: 'G',
    list: [
      {
        name: '广西',
        id: 3,
      },
      {
        name: '广东',
        id: 4,
      },
    ],
  },
  {
    title: 'H',
    list: [
      {
        name: '湖南',
        id: 5,
      },
      {
        name: '湖北',
        id: 6,
      },
    ],
  },
]

const onIndexClick = (key: string) => {
  console.log(key)
}
test('should render elevator list height after height props to be 200', () => {
  const { container } = render(<Elevator list={list} height={200} />)
  expect(container.querySelector('.nut-elevator-list')).toHaveAttribute(
    'style',
    'height: 200px;'
  )
})

test('should render list data when list props not empty', () => {
  const { container } = render(<Elevator list={list} height={200} />)
  expect(container.querySelectorAll('.nut-elevator-list-item').length).toBe(
    list.length
  )
})

test('should list item highlight when onItemClick trigger click', async () => {
  const testClick = vi.fn()
  const { container } = render(
    <Elevator
      list={list}
      height={200}
      onItemClick={(key: string, item: any) => testClick(key, item)}
    />
  )

  const listItem = container.querySelectorAll('.nut-elevator-list-item-name')[0]
  await act(() => {
    fireEvent.click(listItem) // 模拟点击
  })
  expect(testClick).toBeCalled() // 断言 是否已经被点击
  waitFor(() => {
    expect(
      container.querySelector('.nut-elevator-list-item-name-highcolor')
        ?.innerHTML
    ).toBe('安徽')
  })
  expect(testClick).toBeCalledWith('A', { id: 1, name: '安徽' }) // 点击传参测试
})

test('onIndexClick trigger click', () => {
  const testClick = vi.fn()
  const { container } = render(
    <Elevator
      list={list}
      height={200}
      onIndexClick={(key: string) => testClick(key)}
    />
  )
  const listItem = container.querySelectorAll(
    '.nut-elevator-bars-inner-item'
  )[2]

  fireEvent.click(listItem) // 模拟点击
  expect(testClick).toBeCalled() // 断言 是否已经被点击
  expect(testClick).toBeCalledWith('G') // 点击传参测试
  fireEvent.click(listItem) // 模拟点击
  expect(testClick).toBeCalledTimes(2) // 被点击次数
})

test('index is sticky', () => {
  const testClick = vi.fn()
  const { container } = render(
    <Elevator
      list={list}
      height={200}
      sticky
      onIndexClick={(key: string) => testClick(key)}
    />
  )
  const listItem = container.querySelectorAll(
    '.nut-elevator-bars-inner-item'
  )[2]
  fireEvent.click(listItem) // 模拟点击
  setTimeout(() => {
    expect(container.querySelectorAll('.nut-elevator-list-fixed').length).toBe(
      1
    )
  }, 300)
})
