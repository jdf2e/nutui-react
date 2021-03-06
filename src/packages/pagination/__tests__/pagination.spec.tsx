import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Pagination } from '../pagination'

test('should match snapshot', () => {
  const { asFragment } = render(<Pagination totalItems={25} itemsPerPage={5} />)
  expect(asFragment()).toMatchSnapshot()
})

test('should render items', async () => {
  const { container } = render(<Pagination totalItems={25} itemsPerPage={5} />)
  expect(container.querySelectorAll('.nut-pagination__item')).toHaveLength(5)
})
test('should render simple mode', async () => {
  const { container } = render(<Pagination pageCount={12} mode="simple" />)
  expect(container.querySelectorAll('.nut-pagination__item')).toHaveLength(0)
  expect(container.querySelectorAll('.nut-pagination__simple')).toHaveLength(1)
})
test('should render forceEllipses and should emit change event after clicking forceEllipses option', async () => {
  const { container, getByText } = render(
    <Pagination totalItems={125} showPageSize={3} forceEllipses />
  )
  expect(container.querySelectorAll('.nut-pagination__item')).toHaveLength(4)
  fireEvent.click(getByText('...'))
  expect(container.querySelectorAll('.nut-pagination__item')).toHaveLength(5)
  expect(
    container.querySelectorAll('.nut-pagination__item')[1]
  ).toHaveTextContent('3')
})

test('should emit change event after clicking visible option', async () => {
  const { container, getByText } = render(
    <Pagination totalItems={25} itemsPerPage={5} defaultValue={1} />
  )
  const next = getByText('下一页')
  fireEvent.click(next)

  expect(container.querySelectorAll('.nut-pagination__item')).toHaveLength(5)
  expect(container.querySelectorAll('.nut-pagination__item')[1]).toHaveClass(
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
      totalItems={25}
      itemsPerPage={5}
      defaultValue={1}
      onChange={pageChange}
    />
  )
  const prev = getByText('上一页')
  fireEvent.click(prev)

  expect(container.querySelectorAll('.nut-pagination__item')).toHaveLength(5)
  expect(flag).toBeFalsy()
})

test('should render custom content correctly', () => {
  const pageNodeRender = (page: any) => {
    return <div>{page.number === 3 ? 'hot' : page.text}</div>
  }
  const { container, getByText } = render(
    <Pagination
      totalItems={25}
      itemsPerPage={5}
      defaultValue={1}
      pageNodeRender={pageNodeRender}
      prevText="pre"
      nextText="next"
    />
  )
  expect(getByText('pre')).toHaveTextContent('pre')
  expect(getByText('next')).toHaveTextContent('next')
  expect(
    container.querySelectorAll('.nut-pagination__item')[2]
  ).toHaveTextContent('hot')
})
