import * as React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Success } from '@nutui/icons-react'
import Menu from '@/packages/menu'

function mockGetBoundingClientRect(rect: any): () => void {
  const spy = vi.spyOn(Element.prototype, 'getBoundingClientRect')
  spy.mockReturnValue(rect)
  return () => spy.mockRestore()
}

beforeAll(() => {
  mockGetBoundingClientRect({
    width: 300,
    height: 100,
    left: 0,
    top: 0,
    right: 300,
  })
})

test('should match snapshot', () => {
  const options = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ]
  const { asFragment } = render(
    <Menu>
      <Menu.Item options={options} value={0} />
    </Menu>
  )
  expect(asFragment()).toMatchSnapshot()
})

test('should match snapshot of two columns in one line', () => {
  const options = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ]
  const { asFragment } = render(
    <Menu scrollFixed>
      <Menu.Item options={options} value={0} columns={2} />
    </Menu>
  )
  expect(asFragment()).toMatchSnapshot()
})

test('test props', async () => {
  mockGetBoundingClientRect({
    width: 300,
    height: 100,
    left: 0,
    top: 0,
    right: 300,
  })
  const options = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ]
  const testClick = vi.fn((val) => undefined)

  const { container, getByText } = render(
    <Menu lockScroll={false}>
      <Menu.Item
        className="custom-className"
        title="custom title"
        options={options}
        value={0}
        disabled
        direction="up"
        icon={<Success />}
        activeTitleClass="activeTitleClass"
        inactiveTitleClass="inactiveTitleClass"
        onChange={testClick}
      />
      <Menu.Item />
    </Menu>
  )

  await act(() => {
    fireEvent.click(getByText('custom title'))
    fireEvent.click(container.querySelectorAll('.nut-menu-container-item')[1])
    expect(testClick).toBeCalledWith({ text: '新款商品', value: 1 })
  })

  expect(container.querySelector('.custom-className')).toHaveClass(
    'custom-className'
  )
  expect(getByText('custom title')).toHaveTextContent('custom title')
  expect(container.querySelector('.activeTitleClass')).toHaveClass(
    'activeTitleClass'
  )
  expect(container.querySelectorAll('.inactiveTitleClass')[0]).toHaveClass(
    'inactiveTitleClass'
  )
})
