import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'vitest-canvas-mock'

import { Signature } from '../signature'

test('props test', () => {
  const testClick = vi.fn()
  const { container } = render(
    <Signature
      className="test-signature"
      lineWidth={4}
      strokeStyle="green"
      onConfirm={(canvas: HTMLCanvasElement, data: string) =>
        testClick(canvas, data)
      }
    />
  )
  expect(container.querySelector('.nut-signature')).toHaveClass(
    'test-signature'
  )
  expect(container?.innerHTML).toMatchSnapshot()

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
