import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Pagination } from '../pagination'
import { Pagination as TaroPagination } from '../pagination.taro'

// 仅替换 Taro 宿主节点与运行环境，复用两端真实的分页状态和指示器逻辑。
vi.mock('@tarojs/components', () => ({ View: 'div', Text: 'span' }))
vi.mock('@tarojs/taro', () => ({
  default: { getEnv: () => 'WEB' },
}))

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

describe.each([
  ['H5', Pagination],
  ['Taro', TaroPagination],
] as const)('%s lite numeric indicators', (_, Component) => {
  test.each(['capsule', 'text'] as const)(
    'should preserve %s classes and sync page values',
    (indicatorType) => {
      // 保留三段数字结构和样式类名，并验证受控页码及向上取整的总页数。
      const { container, rerender } = render(
        <Component
          total={25}
          pageSize={5}
          mode="lite"
          indicatorType={indicatorType}
          value={2}
        />
      )
      const classPrefix = `nut-pagination-${indicatorType}`
      const indicator = container.querySelector(`.${classPrefix}`)
      expect(indicator?.children).toHaveLength(3)
      expect(indicator?.children[0]).toHaveClass(`${classPrefix}-active`)
      expect(indicator?.children[1]).toHaveClass(`${classPrefix}-spliterator`)
      expect(indicator?.children[1]).toHaveTextContent('/')
      expect(indicator?.children[2]).toHaveClass(`${classPrefix}-default`)
      expect(indicator).toHaveTextContent('2/5')

      rerender(
        <Component
          total={31}
          pageSize={5}
          mode="lite"
          indicatorType={indicatorType}
          value={4}
        />
      )
      expect(indicator?.children[0]).toHaveTextContent('4')
      expect(indicator?.children[2]).toHaveTextContent('7')
    }
  )
})

test('Taro should support multi and simple pagination interactions', () => {
  const change = vi.fn()
  const itemRender = vi.fn((page: { number: number; text: React.ReactNode }) =>
    page.number === 3 ? 'hot' : page.text
  )
  const { container, getByText, rerender } = render(
    <TaroPagination
      total={25}
      pageSize={5}
      defaultValue={2}
      itemRender={itemRender}
      prev="pre"
      next="next"
      onChange={change}
    />
  )

  expect(container.querySelectorAll('.nut-pagination-item')).toHaveLength(5)
  expect(getByText('hot')).toBeInTheDocument()
  fireEvent.click(getByText('next'))
  expect(change).toHaveBeenLastCalledWith(3)
  fireEvent.click(getByText('pre'))
  expect(change).toHaveBeenLastCalledWith(2)
  fireEvent.click(getByText('4'))
  expect(change).toHaveBeenLastCalledWith(4)

  rerender(
    <TaroPagination
      total={12}
      pageSize={2}
      mode="simple"
      value={3}
      onChange={change}
    />
  )
  expect(container.querySelector('.nut-pagination-simple')).toHaveTextContent(
    '3/6'
  )
})

test('Taro should render and update the lite progress indicator', () => {
  const { container, rerender } = render(
    <TaroPagination
      total={4}
      pageSize={1}
      mode="lite"
      indicatorType="progress"
      value={1}
      loop
    />
  )

  expect(container.querySelector('.nut-pagination-lite')).toHaveClass(
    'nut-pagination-lite-loop'
  )
  let items = container.querySelectorAll('.nut-pagination-progress-item')
  expect(items).toHaveLength(4)
  expect(items[0]).toHaveClass('nut-pagination-progress-item-active')

  rerender(
    <TaroPagination
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
