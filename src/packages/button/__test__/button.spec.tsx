import * as React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { useState } from 'react'
import { Star } from '@nutui/icons-react'
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

test('should  fill is outline', () => {
  const { getByTestId } = render(
    <Button data-testid="button" type="primary" fill="outline">
      主要按钮
    </Button>
  )
  expect(getByTestId('button')).toHaveClass('nut-button-outline')
})

test('should have righticon correctly', () => {
  const { getByText } = render(
    <Button data-testid="button" icon={<Star />} rightIcon={<Star />}>
      主要按钮
    </Button>
  )
  expect(getByText('主要按钮')).toHaveClass('right')
})

test('should props color when use fill correctly', () => {
  const { getByTestId } = render(
    <Button data-testid="button" color="blue" fill="outline">
      主要按钮
    </Button>
  )
  expect(getByTestId('button')).toHaveStyle({ 'border-color': 'blue' })
})

test('should props color with no fill correctly', () => {
  const { getByTestId } = render(
    <Button data-testid="button" color="blue">
      主要按钮
    </Button>
  )
  expect(getByTestId('button')).toHaveStyle({ background: 'blue' })
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
    'nut-button-loading'
  )
})
