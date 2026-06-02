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
  const { container } = render(
    <Button data-testid="button" icon={<Star />} rightIcon={<Star />}>
      主要按钮
    </Button>
  )
  expect(container.querySelector('.nut-button-text-right')).toBeInTheDocument()
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
test('should render description correctly', () => {
  const { container, getByText } = render(
    <Button size="48" description="副文本">
      主要按钮
    </Button>
  )
  expect(container.querySelector('.nut-button')).toHaveClass(
    'nut-button-xlarge'
  )
  expect(container.querySelector('.nut-button')).toHaveClass(
    'nut-button-has-desc'
  )
  expect(getByText('副文本')).toBeInTheDocument()
  expect(container.querySelector('.nut-button-desc')).toBeInTheDocument()
})

test('should map sizes correctly', () => {
  const { container } = render(
    <>
      <Button size="44">44</Button>
      <Button size="36">36</Button>
      <Button size="28">28</Button>
    </>
  )
  expect(container.querySelectorAll('.nut-button')[0]).toHaveClass(
    'nut-button-44'
  )
  expect(container.querySelectorAll('.nut-button')[1]).toHaveClass(
    'nut-button-36'
  )
  expect(container.querySelectorAll('.nut-button')[2]).toHaveClass(
    'nut-button-small'
  )
})

test('should render service and primary-light correctly', () => {
  const { container } = render(
    <>
      <Button type="service">Service</Button>
      <Button type="primary" fill="light">
        Light
      </Button>
    </>
  )
  expect(container.querySelectorAll('.nut-button')[0]).toHaveClass(
    'nut-button-service'
  )
  expect(container.querySelectorAll('.nut-button')[1]).toHaveClass(
    'nut-button-primary-light'
  )
})

test('should only render nut-button-title when description is present', () => {
  const { container: withDesc } = render(
    <Button description="辅助描述">有描述</Button>
  )
  expect(withDesc.querySelector('.nut-button-title')).toBeInTheDocument()
  expect(withDesc.querySelector('.nut-button-desc')).toBeInTheDocument()

  const { container: withoutDesc } = render(<Button>无描述</Button>)
  expect(withoutDesc.querySelector('.nut-button-title')).not.toBeInTheDocument()
  expect(withoutDesc.querySelector('.nut-button-desc')).not.toBeInTheDocument()
})
