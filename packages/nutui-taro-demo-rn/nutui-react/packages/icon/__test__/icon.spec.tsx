import * as React from 'react'
import { IconFont as Icon } from '@nutui/icons-react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

test('should icon snapshot match', () => {
  const { asFragment } = render(
    <Icon className="test" name="JD" color="#fa2c19" size="24" />
  )
  expect(asFragment()).toMatchSnapshot()
})

test('should color #fa2c19', async () => {
  const { container } = render(
    <Icon className="test" name="JD" color="#fa2c19" size="24" />
  )
  expect(container.querySelector('i')?.style.color).toBeTruthy()
})

test('should classname test', async () => {
  const { container } = render(
    <Icon className="test" name="JD" color="#fa2c19" size="24" />
  )
  expect(container.querySelector('.test')).toBeInTheDocument()
})

test('should onclick called', () => {
  const handleClick = vi.fn(() => {})
  const { getByTestId } = render(
    <Icon
      data-testid="test"
      className="test"
      name="JD"
      color="#fa2c19"
      size="24"
      onClick={handleClick}
    />
  )
  fireEvent.click(getByTestId('test'))
  expect(handleClick).toBeCalled()
})
