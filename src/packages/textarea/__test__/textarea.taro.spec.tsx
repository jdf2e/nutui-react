import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Taro from '@tarojs/taro'
import TextArea from '../index.taro'

vi.mock('@tarojs/taro', () => ({
  default: { getEnv: vi.fn(() => 'WEB') },
}))

// Model Taro's nativeProps forwarding and focus event emission at the host
// boundary; the TextArea component and its event/state logic remain real.
vi.mock('@tarojs/components', async () => {
  const React = await import('react')
  return {
    View: 'div',
    Textarea: React.forwardRef(function MockTextarea(
      { nativeProps, disabled, value, onFocus, onBlur }: any,
      ref: any
    ) {
      return (
        <div ref={ref}>
          <textarea
            disabled={disabled}
            defaultValue={value}
            onFocus={(event) =>
              onFocus?.({ detail: { value: event.target.value } })
            }
            onBlur={(event) =>
              onBlur?.({ detail: { value: event.target.value } })
            }
            {...nativeProps}
          />
        </div>
      )
    }),
  }
})

afterEach(() => vi.mocked(Taro.getEnv).mockReturnValue('WEB' as any))

test('taro Web readonly blocks native focus and restores focus callbacks', () => {
  const onFocus = vi.fn()
  const onBlur = vi.fn()
  const { container, rerender } = render(
    <TextArea readOnly defaultValue="只读" onFocus={onFocus} onBlur={onBlur} />
  )
  const textarea = container.querySelector('textarea') as HTMLTextAreaElement

  textarea.focus()
  expect(textarea).not.toHaveFocus()
  expect(textarea).toHaveAttribute('tabindex', '-1')
  expect(textarea).toHaveAttribute('readonly')
  expect(textarea).not.toBeDisabled()
  expect(onFocus).not.toHaveBeenCalled()
  expect(onBlur).not.toHaveBeenCalled()

  rerender(<TextArea onFocus={onFocus} onBlur={onBlur} />)
  expect(textarea).not.toHaveAttribute('tabindex')
  textarea.focus()
  expect(textarea).toHaveFocus()
  expect(onFocus).toHaveBeenCalledTimes(1)
  textarea.blur()
  expect(onBlur).toHaveBeenCalledTimes(1)
})

test('taro miniapp readonly retains native disabled behavior', () => {
  vi.mocked(Taro.getEnv).mockReturnValue('WEAPP' as any)
  const { container } = render(<TextArea readOnly />)
  expect(container.querySelector('textarea')).toBeDisabled()
})
