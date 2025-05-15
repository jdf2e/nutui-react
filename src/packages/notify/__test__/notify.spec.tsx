// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { render, waitFor, fireEvent } from '@testing-library/react'
import Cell from '@/packages/cell'
import Notify from '@/packages/notify'

const onClickNotify = vi.fn((type, message, options?) => {
  switch (type) {
    case 'text':
      Notify.text(message, options)
      break
    default:
      break
  }
})

test('event click-show-Notify test', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickNotify('text', '文案', { id: 'custom1' })}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  expect(onClickNotify).toBeCalled()
  expect(document.body.querySelector('.nut-notify')).toBeTruthy()
})

test('test toast props', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() =>
        onClickNotify('text', '主要通知', {
          id: 'custom2',
          duration: 5000,
          style: {
            '--nutui-notify-text-color': '#ad0000',
            '--nutui-notify-base-background-color': '#ffe1e1',
          },
          className: 'aa',
          position: 'bottom',
        })
      }
    />
  )
  fireEvent.click(getByTestId('emit-click'))

  await waitFor(() => {
    expect(onClickNotify).toBeCalled()
    expect(document.querySelector('.nut-notify-content')?.innerHTML).toBe(
      '主要通知'
    )
    expect(document.querySelector('.nut-notify')).toHaveClass('aa')
    expect(document.querySelector('.nut-notify')).toHaveAttribute(
      'position',
      'bottom'
    )
    expect(document.querySelector('.nut-notify')).toHaveAttribute(
      'style',
      '--nutui-notify-text-color: #ad0000; --nutui-notify-base-background-color: #ffe1e1; bottom: 8px;'
    )
    expect(document.getElementById('custom2')).toBeTruthy()
    setTimeout(() => {
      expect(document.getElementById('custom2')).not.toBeTruthy()
    }, 5000)
  })
})
