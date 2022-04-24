import * as React from 'react'
import * as renderer from 'react-test-renderer'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { useState } from 'react'
import { Button } from '../button'

test('this is first testcase', () => {
  const { getByText } = render(
    <Button className="aa" style={{ margin: 8 }} type="primary" shape="round">
      主要按钮
    </Button>
  )
  expect(getByText('主要按钮')).toHaveTextContent('主要按钮')
})

test('fireEvent correctly', () => {
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

  const { container, getByText, asFragment } = render(<ButtonDemo />)

  fireEvent.click(getByText('Click me'))
  expect(container.querySelector('.nut-button')).toHaveClass('nut-button--loading')
})

test('props correctly', () => {
  const buttonRender = renderer.create(
    <Button className="aa" style={{ margin: 8 }} type="primary" shape="round">
      主要按钮
    </Button>
  )
  const buttonInstance = buttonRender.root
  expect(buttonInstance.findByType(Button).props.children).toEqual('主要按钮')
  expect(buttonInstance.findByType(Button).props.type).toEqual('primary')
  expect(buttonInstance.findByType(Button).props.shape).toEqual('round')
})
