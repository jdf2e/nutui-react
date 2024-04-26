import * as React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Dialog } from '../dialog'

test('show dialog base info display ', async () => {
  const onClose = vi.fn()
  const { container } = render(
    <Dialog title="title" data-testid="test" visible onClose={onClose}>
      <div>content</div>
    </Dialog>
  )

  const dialogEle = container.querySelector('.nut-dialog') as HTMLElement
  const headerEle = container.querySelector('.nut-dialog-header') as HTMLElement
  const footerEle = container.querySelector('.nut-dialog-footer') as HTMLElement
  const contentEle = container.querySelector(
    '.nut-dialog-content'
  ) as HTMLElement
  const footerCancelEle = container.querySelector(
    '.nut-dialog-footer-cancel'
  ) as HTMLElement
  const wrapEle = container.querySelector('.nut-dialog-wrap') as HTMLElement
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
    '.nut-dialog-footer.vertical'
  ) as HTMLElement
  expect(wrapEle).toBeInTheDocument()
})

test('hide dialog footer', async () => {
  const { container } = render(
    <Dialog title="title" footer={null} visible>
      content
    </Dialog>
  )

  expect(container.querySelectorAll('.nut-dialog-footer').length).toBe(0)
})

test('hide dialog title', async () => {
  const { container } = render(<Dialog visible>content</Dialog>)
  expect(container.querySelectorAll('.nut-dialog-header').length).toBe(0)
})

test('tips dialog', async () => {
  const { container } = render(
    <Dialog visible hideCancelButton>
      content
    </Dialog>
  )
  expect(container.querySelectorAll('.nut-dialog-footer-cancel').length).toBe(0)
})

test('dialog cancelText confirmText', async () => {
  const { container } = render(
    <Dialog visible cancelText="取消文案自定义" confirmText="确定文案自定义">
      content
    </Dialog>
  )

  const footerOkEle = container.querySelector('.nut-dialog-footer-ok')
  const footerCancelEle = container.querySelector('.nut-dialog-footer-cancel')
  expect(footerOkEle).toHaveTextContent('确定文案自定义')
  expect(footerCancelEle).toHaveTextContent('取消文案自定义')
})

test('dialog closeIcon equals true', async () => {
  const { container } = render(
    <Dialog
      visible
      cancelText="取消文案自定义"
      confirmText="确定文案自定义"
      closeIcon
    />
  )

  const closeBtn = container.querySelector('.nut-dialog-close')
  expect(closeBtn).toBeInTheDocument()
})

test('dialog close icon  position adjustment', async () => {
  const onClose = vi.fn()
  const onCancel = vi.fn()
  const { container } = render(
    <Dialog
      visible
      cancelText="取消文案自定义"
      confirmText="确定文案自定义"
      closeIcon
      closeIconPosition="top-left"
      onClose={onClose}
      onCancel={onCancel}
    />
  )

  const closeBtn = container.querySelector(
    '.nut-dialog-close-top-left'
  ) as HTMLElement
  expect(closeBtn).toBeInTheDocument()
  fireEvent.click(closeBtn)
  expect(onClose).toBeCalled()
  expect(onCancel).toBeCalled()
})

test('should display loading when onConfirm returns a promise', async () => {
  vi.useFakeTimers()
  const mockOnConfirm = vi.fn(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
  )
  const { container } = render(<Dialog visible onConfirm={mockOnConfirm} />)

  const footerOkEle = container.querySelector('.nut-dialog-footer-ok')!
  await act(() => {
    fireEvent.click(footerOkEle)
  })

  expect(footerOkEle).toHaveClass('nut-button-loading')

  await act(() => {
    vi.runAllTimers()
  })

  waitFor(() => {
    expect(footerOkEle).not.toHaveClass('nut-button-loading')
  })

  expect(mockOnConfirm).toHaveBeenCalled()
})
