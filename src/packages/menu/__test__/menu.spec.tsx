import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Menu from '@/packages/menu'
import MenuItem from '@/packages/menuitem'

test('should match snapshot', () => {
  const options = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ]
  const { asFragment } = render(
    <Menu>
      <MenuItem options={options} value={0} />
    </Menu>
  )
  expect(asFragment()).toMatchSnapshot()
})

test('test props', () => {
  const options = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ]
  const testClick = jest.fn((val) => undefined)

  const { container, getByText } = render(
    <Menu>
      <MenuItem
        className="custom-className"
        title="custom title"
        options={options}
        value={0}
        disabled
        columns={2}
        optionsIcon="my"
        activeTitleClass="activeTitleClass"
        inactiveTitleClass="inactiveTitleClass"
        fontClassName="my-font"
        iconClassPrefix="my-font-icon"
        onChange={testClick}
      />
    </Menu>
  )
  fireEvent.click(getByText('custom title'))

  fireEvent.click(container.querySelectorAll('.nut-menu-item__option ')[1])
  expect(testClick).toBeCalledWith({ text: '新款商品', value: 1 })

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
  expect(container.querySelector('.my-font-icon-my')).toHaveClass(
    'my-font-icon-my'
  )
})
