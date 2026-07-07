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
    'nut-pagination-item-active'
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
  expect(
    container.querySelector('.nut-pagination-item-active')
  ).toHaveTextContent('2')
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
  expect(
    container.querySelector('.nut-pagination-item-active')
  ).toHaveTextContent('2')
  const page = getByText('4')
  fireEvent.click(page)
  expect(value).toEqual(4)
  expect(
    container.querySelector('.nut-pagination-item-active')
  ).toHaveTextContent('4')
})

test('should render lite capsule indicator by default', () => {
  const { container } = render(
    <Pagination total={12} pageSize={1} mode="lite" defaultValue={2} />
  )
  const lite = container.querySelector('.nut-pagination-lite')
  expect(lite).toHaveClass('nut-pagination-lite-capsule')
  const capsule = container.querySelector('.nut-pagination-capsule')
  expect(capsule).toBeInTheDocument()
  expect(
    container.querySelector('.nut-pagination-capsule-active')
  ).toHaveTextContent('2')
  expect(
    container.querySelector('.nut-pagination-capsule-default')
  ).toHaveTextContent('12')
})

test('should render lite text indicator', () => {
  const { container } = render(
    <Pagination
      total={9}
      pageSize={1}
      mode="lite"
      indicatorType="text"
      defaultValue={1}
    />
  )
  expect(container.querySelector('.nut-pagination-lite')).toHaveClass(
    'nut-pagination-lite-text'
  )
  expect(
    container.querySelector('.nut-pagination-text-active')
  ).toHaveTextContent('1')
  expect(
    container.querySelector('.nut-pagination-text-default')
  ).toHaveTextContent('9')
})

test('should render lite progress indicator with active segment', () => {
  const { container } = render(
    <Pagination
      total={5}
      pageSize={1}
      mode="lite"
      indicatorType="progress"
      defaultValue={3}
    />
  )
  const items = container.querySelectorAll('.nut-pagination-progress-item')
  expect(items).toHaveLength(5)
  const actives = container.querySelectorAll(
    '.nut-pagination-progress-item-active'
  )
  expect(actives).toHaveLength(1)
  expect(items[2]).toHaveClass('nut-pagination-progress-item-active')
})

test('should sync progress active segment when value changes', () => {
  const { container, rerender } = render(
    <Pagination
      total={4}
      pageSize={1}
      mode="lite"
      indicatorType="progress"
      value={1}
    />
  )
  let items = container.querySelectorAll('.nut-pagination-progress-item')
  expect(items[0]).toHaveClass('nut-pagination-progress-item-active')
  rerender(
    <Pagination
      total={4}
      pageSize={1}
      mode="lite"
      indicatorType="progress"
      value={4}
    />
  )
  items = container.querySelectorAll('.nut-pagination-progress-item')
  expect(items[3]).toHaveClass('nut-pagination-progress-item-active')
})

test('should apply loop class in lite mode', () => {
  const { container } = render(
    <Pagination total={3} pageSize={1} mode="lite" loop />
  )
  expect(container.querySelector('.nut-pagination-lite')).toHaveClass(
    'nut-pagination-lite-loop'
  )
})
