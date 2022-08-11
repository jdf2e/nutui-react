import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-canvas-mock'

import { Signature } from '../signature'

test('props test', () => {
  const testClick = jest.fn()
  const { container } = render(
    <Signature
      className="test-signature"
      lineWidth={4}
      strokeStyle="green"
      confirm={(canvas: HTMLCanvasElement, data: string) =>
        testClick(canvas, data)
      }
    />
  )
  expect(container.querySelector('.nut-signature')).toHaveClass(
    'test-signature'
  )
  expect(container?.innerHTML).toMatchSnapshot()
  const btns = container.querySelectorAll('.nut-signature__btn')
  expect(btns.length).toBe(2)
  fireEvent.click(btns[1])
  expect(testClick).toBeCalled()
  expect(testClick).toBeCalledTimes(1)

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.lineWidth = 4
    ctx.strokeStyle = 'green'
    ctx.beginPath()
    ctx.lineTo(10, 50)
    ctx.lineTo(80, 120)
    ctx.stroke()
    const _img = document.createElement('img')
    _img.src = canvas.toDataURL()
    expect(canvas.toDataURL()).not.toBeNull()
  }
})
