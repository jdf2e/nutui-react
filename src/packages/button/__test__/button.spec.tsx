import * as React from 'react'
// import * as renderer from 'react-test-renderer'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { useState } from 'react'
import { Button } from '../button'

test('should match snapshot', () => {
  const { container } = render(
    <Button className="aa" style={{ margin: 8 }} type="primary" shape="round">
      主要按钮
    </Button>
  )
  expect(container.firstChild?.nodeName).toBe('BUTTON')
  expect(container).toMatchSnapshot()
})

test('should children correctly', () => {
  const { getByText, getByTestId } = render(
    <Button
      data-testid="button"
      className="aa"
      style={{ margin: 8 }}
      type="primary"
      shape="round"
    >
      主要按钮
    </Button>
  )
  expect(getByText('主要按钮')).toHaveTextContent('主要按钮')
  expect(getByTestId('button')).toHaveClass('aa')
  expect(getByTestId('button')).toHaveAttribute('style')
})

test('should fireEvent correctly', () => {
  const ButtonDemo = () => {
    const [loading, setLoading] = useState(false)
    return (
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          setLoading(!loading)
        }}
        style={{ margin: 8 }}
      >
        Click me
      </Button>
    )
  }

  const { container, getByText } = render(<ButtonDemo />)

  fireEvent.click(getByText('Click me'))
  expect(container.querySelector('.nut-button')).toHaveClass(
    'nut-button--loading'
  )
})
