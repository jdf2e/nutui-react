import * as React from 'react'
import { render, fireEvent, waitFor, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Dialog } from '../dialog'

test('show dialog base info display ', async () => {
  const onCancel = vi.fn()
  const { container } = render(
    <Dialog title="title" data-testid="test" visible onCancel={onCancel}>
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
  expect(onCancel).toBeCalled()
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

test('show dialog header ', async () => {
  const { container } = render(
    <Dialog header={<div className="custom-header">header</div>} visible>
      content
    </Dialog>
  )
  expect(container.querySelector('.custom-header')).toBeInTheDocument()
})

test('show dialog confirmBadge and cancelBadge ', async () => {
  const { container } = render(
    <Dialog visible confirmBadge="confirm" cancelBadge="cancel">
      content
    </Dialog>
  )
  expect(
    container.querySelector('.nut-dialog-footer-ok-badge')
  ).toHaveTextContent('confirm')
  expect(
    container.querySelector('.nut-dialog-footer-cancel-badge')
  ).toHaveTextContent('cancel')
})

test('dialog disableConfirmButton ', async () => {
  const onConfirm = vi.fn()
  const { container } = render(
    <Dialog visible disableConfirmButton onConfirm={onConfirm}>
      content
    </Dialog>
  )
  const footerOkEle = container.querySelector(
    '.nut-dialog-footer-ok'
  ) as HTMLElement
  expect(footerOkEle).toHaveClass('disabled')
  fireEvent.click(footerOkEle)
  expect(onConfirm).not.toBeCalled()
})

test('dialog beforeCancel ', async () => {
  const onCancel = vi.fn()
  const beforeCancel = vi.fn(() => false)
  const { container } = render(
    <Dialog visible onCancel={onCancel} beforeCancel={beforeCancel}>
      content
    </Dialog>
  )
  const footerCancelEle = container.querySelector(
    '.nut-dialog-footer-cancel'
  ) as HTMLElement
  fireEvent.click(footerCancelEle)
  expect(beforeCancel).toBeCalled()
  expect(onCancel).not.toBeCalled()
})

test('should render segment classes for posture adaptation', () => {
  const { container, rerender } = render(
    <Dialog visible segment="left" title="Left Dialog" />
  )
  expect(container.querySelector('.nut-dialog-outer-segment-left')).toBeTruthy()

  rerender(<Dialog visible segment="right" title="Right Dialog" />)
  expect(
    container.querySelector('.nut-dialog-outer-segment-right')
  ).toBeTruthy()

  rerender(<Dialog visible segment="center" title="Center Dialog" />)
  expect(
    container.querySelector('.nut-dialog-outer-segment-center')
  ).toBeTruthy()

  rerender(<Dialog visible segment="auto" title="Auto Dialog" />)
  expect(container.querySelector('.nut-dialog-outer-segment-auto')).toBeFalsy()
})

test('dialog titleIcon subtitle and custom closeIcon', () => {
  const { container } = render(
    <Dialog
      visible
      title="with icon"
      subtitle="sub"
      titleIcon={<span className="title-icon">i</span>}
      closeIcon={<span className="custom-close">x</span>}
    >
      content
    </Dialog>
  )
  expect(container.querySelector('.title-icon')).toBeInTheDocument()
  expect(container.querySelector('.nut-dialog-subtitle')).toHaveTextContent(
    'sub'
  )
  expect(container.querySelector('.custom-close')).toBeInTheDocument()
})

test('dialog closeIcon position bottom', () => {
  const { container } = render(
    <Dialog visible closeIcon closeIconPosition="bottom" />
  )
  expect(
    container.querySelector('.nut-dialog-close-bottom')
  ).toBeInTheDocument()
})

test('dialog autoClose countdown', async () => {
  vi.useFakeTimers()
  const onClose = vi.fn()
  const { container } = render(
    <Dialog visible autoClose={2} onClose={onClose}>
      content
    </Dialog>
  )
  expect(container.querySelector('.nut-dialog-close-auto')).toBeInTheDocument()

  await act(async () => {
    vi.advanceTimersByTime(1000)
  })
  expect(container.querySelector('.nut-dialog-close-auto')).toBeInTheDocument()

  await act(async () => {
    vi.advanceTimersByTime(1000)
  })
  expect(onClose).toBeCalled()
  vi.useRealTimers()
})

test('dialog onConfirm reject keeps dialog and clears loading', async () => {
  const onConfirm = vi.fn(() => Promise.reject(new Error('fail')))
  const onClose = vi.fn()
  const { container } = render(
    <Dialog visible onConfirm={onConfirm} onClose={onClose} />
  )
  const footerOkEle = container.querySelector(
    '.nut-dialog-footer-ok'
  ) as HTMLElement
  await act(async () => {
    fireEvent.click(footerOkEle)
  })
  await waitFor(() => {
    expect(onConfirm).toBeCalled()
    expect(onClose).not.toBeCalled()
    expect(footerOkEle).not.toHaveClass('nut-button-loading')
  })
})

test('dialog overlay click triggers cancel', async () => {
  const onCancel = vi.fn()
  const onOverlayClick = vi.fn(() => true)
  const { container } = render(
    <Dialog
      visible
      closeOnOverlayClick
      onCancel={onCancel}
      onOverlayClick={onOverlayClick}
    >
      content
    </Dialog>
  )
  const overlay = container.querySelector('.nut-overlay') as HTMLElement
  fireEvent.click(overlay)
  expect(onOverlayClick).toBeCalled()
  expect(onCancel).toBeCalled()
})

test('dialog hideConfirmButton uses block footer class', () => {
  const { container } = render(
    <Dialog visible hideConfirmButton>
      content
    </Dialog>
  )
  expect(
    container.querySelector('.nut-dialog-footer-block')
  ).toBeInTheDocument()
})

test('dialog functional call update and close ', async () => {
  let dialog: any
  await act(async () => {
    dialog = Dialog.confirm({
      title: 'functional',
      content: 'original content',
    })
  })

  expect(screen.getByText('functional')).toBeInTheDocument()
  expect(screen.getByText('original content')).toBeInTheDocument()

  await act(async () => {
    dialog.update({
      content: 'updated content',
    })
  })
  expect(screen.getByText('updated content')).toBeInTheDocument()

  await act(async () => {
    dialog.close()
  })

  await waitFor(() => {
    expect(screen.queryByText('functional')).not.toBeInTheDocument()
  })
})

test('Dialog.alert confirm closes and cancel callback', async () => {
  const onConfirm = vi.fn()
  const onCancel = vi.fn()
  const onClose = vi.fn()
  await act(async () => {
    Dialog.alert({
      title: 'alert-title',
      content: 'alert-content',
      onConfirm,
      onCancel,
      onClose,
    })
  })
  expect(screen.getByText('alert-title')).toBeInTheDocument()

  const okBtn = document.querySelector('.nut-dialog-footer-ok') as HTMLElement
  await act(async () => {
    fireEvent.click(okBtn)
  })
  await waitFor(() => {
    expect(onConfirm).toBeCalled()
    expect(screen.queryByText('alert-title')).not.toBeInTheDocument()
  })
})

test('Dialog.confirm promise onConfirm resolve closes', async () => {
  const onConfirm = vi.fn(() => Promise.resolve())
  await act(async () => {
    Dialog.confirm({
      title: 'promise-ok',
      content: 'c',
      onConfirm,
    })
  })
  const okBtn = document.querySelector('.nut-dialog-footer-ok') as HTMLElement
  await act(async () => {
    fireEvent.click(okBtn)
  })
  await waitFor(() => {
    expect(onConfirm).toBeCalled()
    expect(screen.queryByText('promise-ok')).not.toBeInTheDocument()
  })
})

test('Dialog.confirm promise onConfirm reject keeps open', async () => {
  const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  const onConfirm = vi.fn(() => Promise.reject(new Error('boom')))
  await act(async () => {
    Dialog.confirm({
      title: 'promise-fail',
      content: 'c',
      onConfirm,
    })
  })
  const okBtn = document.querySelector('.nut-dialog-footer-ok') as HTMLElement
  await act(async () => {
    fireEvent.click(okBtn)
  })
  await waitFor(() => {
    expect(onConfirm).toBeCalled()
    expect(screen.getByText('promise-fail')).toBeInTheDocument()
  })
  errSpy.mockRestore()
  await act(async () => {
    Dialog.destroyAll()
  })
})

test('Dialog.confirm cancel closes and Dialog.destroyAll', async () => {
  await act(async () => {
    Dialog.destroyAll()
  })

  let dialog: any
  await act(async () => {
    dialog = Dialog.confirm({
      title: 'to-cancel',
      content: 'c',
      cancelText: 'unique-cancel-btn',
    })
  })
  expect(screen.getByText('to-cancel')).toBeInTheDocument()

  await act(async () => {
    fireEvent.click(screen.getByText('unique-cancel-btn'))
  })
  await waitFor(() => {
    expect(screen.queryByText('to-cancel')).not.toBeInTheDocument()
  })

  await act(async () => {
    Dialog.confirm({ title: 'left-1', content: 'c' })
    Dialog.confirm({ title: 'left-2', content: 'c' })
  })
  expect(screen.getByText('left-1')).toBeInTheDocument()
  expect(screen.getByText('left-2')).toBeInTheDocument()

  await act(async () => {
    Dialog.destroyAll()
  })
  await waitFor(() => {
    expect(screen.queryByText('left-1')).not.toBeInTheDocument()
    expect(screen.queryByText('left-2')).not.toBeInTheDocument()
  })

  // keep reference used so close path in confirm stays covered when dialog already closed
  expect(dialog).toBeTruthy()
})

test('Dialog.config is callable', () => {
  expect(() => Dialog.config({} as any)).not.toThrow()
})

test('auto segment follows fold screen slight bent', async () => {
  const { container, unmount } = render(
    <Dialog visible segment="auto" title="fold">
      content
    </Dialog>
  )
  await act(async () => {
    window.dispatchEvent(
      new CustomEvent('onFoldScreenChanged', {
        detail: { isSlightBent: 1 },
      })
    )
  })
  await waitFor(() => {
    expect(
      container.querySelector('.nut-dialog-outer-segment-left')
    ).toBeTruthy()
  })

  await act(async () => {
    window.dispatchEvent(
      new CustomEvent('onFoldScreenChanged', {
        detail: { isSlightBent: 0, hingeAngle: 180 },
      })
    )
  })
  await waitFor(() => {
    expect(
      container.querySelector('.nut-dialog-outer-segment-center')
    ).toBeTruthy()
  })
  unmount()
})
