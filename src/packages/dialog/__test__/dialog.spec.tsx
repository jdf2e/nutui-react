import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Dialog } from '../dialog'

test('show dialog base info display ', async () => {
  const onClose = jest.fn()
  const { container } = render(
    <Dialog title="title" data-testid="test" visible onClose={onClose}>
      <div>content</div>
    </Dialog>
  )

  const dialogEle = container.querySelector('.nut-dialog') as HTMLElement
  const headerEle = container.querySelector(
    '.nut-dialog__header'
  ) as HTMLElement
  const footerEle = container.querySelector(
    '.nut-dialog__footer'
  ) as HTMLElement
  const contentEle = container.querySelector(
    '.nut-dialog__content'
  ) as HTMLElement
  const footerCancelEle = container.querySelector(
    '.nut-dialog__footer-cancel'
  ) as HTMLElement
  const wrapEle = container.querySelector('.nut-dialog__wrap') as HTMLElement
  expect(dialogEle).toBeInTheDocument()
  expect(headerEle.innerHTML).toEqual('title')
  expect(contentEle.innerHTML).toEqual('<div>content</div>')
  expect(footerEle.children.length).toBe(2)

  expect(wrapEle).toBeNull()
  fireEvent.click(footerCancelEle)
  expect(onClose).toBeCalled()
})

test('show dialog custom footer-direction ', async () => {
  const { container } = render(
    <Dialog title="title" footerDirection="vertical" visible>
      content
    </Dialog>
  )

  const wrapEle = container.querySelector(
    '.nut-dialog__footer.vertical'
  ) as HTMLElement
  expect(wrapEle).toBeInTheDocument()
})

test('hide dialog footer', async () => {
  const { container } = render(
    <Dialog title="title" footer={null} visible>
      content
    </Dialog>
  )

  expect(container.querySelectorAll('.nut-dialog__footer').length).toBe(0)
})

test('hide dialog title', async () => {
  const { container } = render(<Dialog visible>content</Dialog>)
  expect(container.querySelectorAll('.nut-dialog__header').length).toBe(0)
})

test('tips dialog', async () => {
  const { container } = render(
    <Dialog visible hideCancelButton>
      content
    </Dialog>
  )
  expect(container.querySelectorAll('.nut-dialog__footer-cancel').length).toBe(
    0
  )
})

test('dialog cancelText confirmText', async () => {
  const { container } = render(
    <Dialog visible cancelText="取消文案自定义" confirmText="确定文案自定义">
      content
    </Dialog>
  )

  const footerOkEle = container.querySelector('.nut-dialog__footer-ok')
  const footerCancelEle = container.querySelector('.nut-dialog__footer-cancel')
  expect(footerOkEle).toHaveTextContent('确定文案自定义')
  expect(footerCancelEle).toHaveTextContent('取消文案自定义')
})
