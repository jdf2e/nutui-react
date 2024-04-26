import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Overlay } from '../overlay'

test('should change z-index when using z-index prop', () => {
  const { getByTestId } = render(
    <Overlay
      data-testid="overlay-zindex"
      visible
      style={{ '--nutui-overlay-zIndex': 99 }}
    />
  )
  // @ts-ignore
  expect(getByTestId('overlay-zindex')).toMatchInlineSnapshot(`
    <div
      class="nut-overlay"
      data-testid="overlay-zindex"
      style="--nutui-overlay-zIndex: 99;"
    />
  `)
})

test('prop close-on-click-overlay test', () => {
  const onClose = vi.fn()
  const { getByTestId } = render(
    <Overlay
      data-testid="overlay-closeFalsy"
      visible
      closeOnOverlayClick={false}
      onClick={onClose}
    />
  )
  fireEvent.click(getByTestId('overlay-closeFalsy'))
  expect(getByTestId('overlay-closeFalsy').style.display).toEqual('')
})

test('event click test', () => {
  const onClose = vi.fn()
  const { getByTestId } = render(
    <Overlay
      data-testid="overlay-click"
      visible
      closeOnOverlayClick
      onClick={onClose}
    />
  )
  fireEvent.click(getByTestId('overlay-click'))
  expect(onClose).toBeCalled()
})

test('content test', () => {
  const { container } = render(
    <Overlay visible>
      <div className="wrapper">
        <div className="content">这里是正文</div>
      </div>
    </Overlay>
  )
  expect(container).toMatchSnapshot()
})
