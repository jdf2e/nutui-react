import * as React from 'react'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Rate } from '../rate.taro'

type MockViewProps = React.HTMLAttributes<HTMLDivElement> & {
  catchMove?: boolean
}

vi.mock('@tarojs/components', async () => {
  const ReactModule = await import('react')
  return {
    View: ReactModule.forwardRef<HTMLDivElement, MockViewProps>(
      function MockView({ catchMove, ...props }, ref) {
        return <div ref={ref} {...props} />
      }
    ),
    Text: 'span',
  }
})

vi.mock('@nutui/icons-react-taro', () => ({
  StarFill: () => <span data-testid="star" />,
}))

vi.mock('@/utils/taro/get-rect', () => ({
  getRectInMultiPlatform: vi.fn(async (element: HTMLElement) => {
    const parent = element.parentElement
    const index = parent ? Array.from(parent.children).indexOf(element) : 0
    return { left: index * 20, width: 20 }
  }),
}))

describe('Taro Rate', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  test.each(['small', 'normal', 'large'] as const)(
    'applies %s size classes',
    (size) => {
      const { container } = render(<Rate size={size} />)

      expect(container.querySelector('.nut-rate')).toHaveClass(
        `nut-rate-${size}`
      )
      expect(container.querySelector('.nut-rate-item')).toHaveClass(
        `nut-rate-item-${size}`
      )
    }
  )

  test('renders labels, score, disabled state, and custom icons', () => {
    const checkedIcon = <span data-testid="checked" />
    const { container, rerender } = render(
      <Rate
        count={2}
        defaultValue={1}
        label="评分"
        showScore
        checkedIcon={checkedIcon}
        disabled
      />
    )

    expect(container.querySelector('.nut-rate')).toHaveClass('disabled')
    expect(container.querySelector('.nut-rate-label')).toHaveTextContent('评分')
    expect(container.querySelector('.nut-rate-score')).toHaveTextContent('1.0')
    expect(container.querySelector('.nut-rate-score')).toHaveClass(
      'nut-rate-score-disabled'
    )
    expect(container.querySelectorAll('[data-testid="checked"]')).toHaveLength(
      2
    )

    rerender(
      <Rate
        direction="vertical"
        value={1}
        label={['不满意', '满意']}
        count={2}
        uncheckedIcon={<span data-testid="unchecked" />}
      />
    )
    expect(container.querySelector('.nut-rate')).toHaveClass(
      'nut-rate-vertical'
    )
    expect(container.querySelectorAll('.nut-rate-labels-item')).toHaveLength(2)
    expect(
      container.querySelectorAll('[data-testid="unchecked"]')
    ).toHaveLength(1)
  })

  test('updates, resets the first star, and respects min and readOnly', () => {
    const onChange = vi.fn()
    const { container, rerender } = render(
      <Rate count={2} defaultValue={1} onChange={onChange} />
    )
    const items = container.querySelectorAll('.nut-rate-item')

    fireEvent.click(items[0])
    expect(onChange).toHaveBeenLastCalledWith(0)
    fireEvent.click(items[1])
    expect(onChange).toHaveBeenLastCalledWith(2)

    rerender(<Rate count={2} min={1} onChange={onChange} />)
    fireEvent.click(container.querySelectorAll('.nut-rate-item')[0])
    expect(onChange).toHaveBeenLastCalledWith(1)

    rerender(<Rate count={2} readOnly onChange={onChange} />)
    const calls = onChange.mock.calls.length
    fireEvent.click(container.querySelectorAll('.nut-rate-item')[1])
    expect(onChange).toHaveBeenCalledTimes(calls)
  })

  test('selects half values and clears vertical animation', () => {
    vi.useFakeTimers()
    const onChange = vi.fn()
    const { container } = render(
      <Rate
        direction="vertical"
        count={2}
        defaultValue={1}
        allowHalf
        onChange={onChange}
      />
    )
    const half = container.querySelector('.nut-rate-item-half') as HTMLElement

    fireEvent.click(half)
    expect(onChange).toHaveBeenLastCalledWith(0.5)
    const second = container.querySelectorAll('.nut-rate-item')[1]
    fireEvent.click(second)
    expect(second.firstChild).toHaveClass('nut-rate-item-icon-animate')

    act(() => vi.advanceTimersByTime(300))
    expect(second.firstChild).not.toHaveClass('nut-rate-item-icon-animate')
    vi.useRealTimers()
  })

  test('handles half-value touch move, end, and cancel', async () => {
    const onChange = vi.fn()
    const onTouchEnd = vi.fn()
    const { container } = render(
      <Rate
        touchable
        allowHalf
        count={3}
        onChange={onChange}
        onTouchEnd={onTouchEnd}
      />
    )
    const root = container.querySelector('.nut-rate') as HTMLElement

    await waitFor(() =>
      expect(container.querySelectorAll('.nut-rate-item')).toHaveLength(3)
    )
    fireEvent.touchStart(root, { touches: [{ clientX: 0 }] })
    fireEvent.touchMove(root, { touches: [{ clientX: 25 }] })
    expect(onChange).toHaveBeenLastCalledWith(1.5)

    fireEvent.touchEnd(root, { changedTouches: [{ clientX: 45 }] })
    expect(onTouchEnd).toHaveBeenLastCalledWith(expect.anything(), 2.5)

    fireEvent.touchCancel(root, { changedTouches: [{ clientX: 0 }] })
    expect(onTouchEnd).toHaveBeenLastCalledWith(expect.anything(), 0)
  })

  test.each([
    ['disabled', { disabled: true }],
    ['readOnly', { readOnly: true }],
    ['not touchable', { touchable: false }],
  ] as const)('ignores touch events when %s', (_, guardProps) => {
    const onChange = vi.fn()
    const onTouchEnd = vi.fn()
    const { container } = render(
      <Rate
        touchable
        count={2}
        onChange={onChange}
        onTouchEnd={onTouchEnd}
        {...guardProps}
      />
    )
    const root = container.querySelector('.nut-rate') as HTMLElement

    fireEvent.touchStart(root, { touches: [{ clientX: 20 }] })
    fireEvent.touchMove(root, { touches: [{ clientX: 20 }] })
    fireEvent.touchEnd(root, { changedTouches: [{ clientX: 20 }] })
    expect(onChange).not.toHaveBeenCalled()
    expect(onTouchEnd).not.toHaveBeenCalled()
  })
})
