import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Pagination } from '../pagination'

test('should match snapshot', () => {
  const { asFragment } = render(<Pagination total={25} pageSize={5} />)
  expect(asFragment()).toMatchSnapshot()
})

test('should render items', async () => {
  const { container } = render(<Pagination total={25} pageSize={5} />)
  expect(container.querySelectorAll('.nut-pagination-item')).toHaveLength(5)
})
test('should render simple mode', async () => {
  const { container } = render(
    <Pagination total={12} pageSize={1} mode="simple" />
  )
  expect(container.querySelectorAll('.nut-pagination-item')).toHaveLength(0)
  expect(container.querySelectorAll('.nut-pagination-simple')).toHaveLength(1)
})
test('should render ellipse and should emit change event after clicking ellipse option', async () => {
  const { container, getByText } = render(
    <Pagination total={125} itemSize={3} ellipse />
  )
  expect(container.querySelectorAll('.nut-pagination-item')).toHaveLength(4)
  fireEvent.click(getByText('...'))
  expect(container.querySelectorAll('.nut-pagination-item')).toHaveLength(5)
  expect(
    container.querySelectorAll('.nut-pagination-item')[1]
  ).toHaveTextContent('3')
})

test('should emit change event after clicking visible option', async () => {
  const { container, getByText } = render(
    <Pagination total={25} pageSize={5} defaultValue={1} />
  )
  const next = getByText('下一页')
  fireEvent.click(next)

  expect(container.querySelectorAll('.nut-pagination-item')).toHaveLength(5)
  expect(container.querySelectorAll('.nut-pagination-item')[1]).toHaveClass(
    'active'
  )
})

test('should not emit change event after clicking disable option', async () => {
  let flag = false
  const pageChange = (v: number) => {
    flag = true
  }
  const { container, getByText } = render(
    <Pagination
      total={25}
      pageSize={5}
      defaultValue={1}
      onChange={pageChange}
    />
  )
  const prev = getByText('上一页')
  fireEvent.click(prev)

  expect(container.querySelectorAll('.nut-pagination-item')).toHaveLength(5)
  expect(flag).toBeFalsy()
})

test('should render custom content correctly', () => {
  const itemRender = (page: any) => {
    return <div>{page.number === 3 ? 'hot' : page.text}</div>
  }
  const { container, getByText } = render(
    <Pagination
      total={25}
      pageSize={5}
      defaultValue={1}
      itemRender={itemRender}
      prev="pre"
      next="next"
    />
  )
  expect(getByText('pre')).toHaveTextContent('pre')
  expect(getByText('next')).toHaveTextContent('next')
  expect(
    container.querySelectorAll('.nut-pagination-item')[2]
  ).toHaveTextContent('hot')
})

test('test controlled mode', () => {
  let value = 2
  const pageChange = (v: number) => {
    value = v
  }
  const { container, getByText } = render(
    <Pagination value={value} total={25} pageSize={5} onChange={pageChange} />
  )
  expect(container.querySelector('.active')).toHaveTextContent('2')
  const page = getByText('4')
  fireEvent.click(page)
  expect(value).toEqual(4)
})

test('test uncontrolled mode', () => {
  let value = 0
  const pageChange = (v: number) => {
    value = v
  }
  const { container, getByText } = render(
    <Pagination
      defaultValue={2}
      total={25}
      pageSize={5}
      onChange={pageChange}
    />
  )
  expect(container.querySelector('.active')).toHaveTextContent('2')
  const page = getByText('4')
  fireEvent.click(page)
  expect(value).toEqual(4)
  expect(container.querySelector('.active')).toHaveTextContent('4')
})
