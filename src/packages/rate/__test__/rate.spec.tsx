import * as React from 'react'
import { useState } from 'react'
import { act, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HeartFill, Heart } from '@nutui/icons-react'
import { Rate } from '../rate'

// 容器尺寸类驱动共享变量，子节点类继续兼容现有样式。
describe('size classes', () => {
  test.each(['small', 'normal', 'large'] as const)('%s', (size) => {
    const { container } = render(<Rate size={size} />)

    expect(container.querySelector('.nut-rate')).toHaveClass(`nut-rate-${size}`)
    expect(container.querySelector('.nut-rate-item')).toHaveClass(
      `nut-rate-item-${size}`
    )
  })
})

test('animates vertical changes and clears the animation class', () => {
  vi.useFakeTimers()
  const { container } = render(
    <Rate direction="vertical" count={2} defaultValue={0} />
  )
  const items = container.querySelectorAll('.nut-rate-item')

  fireEvent.click(items[1])
  expect(items[1].firstChild).toHaveClass('nut-rate-item-icon-animate')

  act(() => vi.advanceTimersByTime(300))
  expect(items[1].firstChild).not.toHaveClass('nut-rate-item-icon-animate')
  vi.useRealTimers()
})

test('renders a checked icon fallback and selects a half value', () => {
  const onChange = vi.fn()
  const { container } = render(
    <Rate
      direction="vertical"
      count={2}
      defaultValue={1}
      allowHalf
      checkedIcon={<HeartFill />}
      onChange={onChange}
    />
  )

  expect(container.querySelectorAll('.nut-icon-HeartFill')).toHaveLength(3)
  fireEvent.click(container.querySelector('.nut-rate-item-half') as HTMLElement)
  expect(onChange).toHaveBeenLastCalledWith(0.5)
})

test('reports touch end values and ignores touch input when disabled', () => {
  const onTouchEnd = vi.fn()
  const getBoundingClientRect = vi
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(function mockRect() {
      const parent = this.parentElement
      const index = parent ? Array.from(parent.children).indexOf(this) : 0
      return {
        left: index * 20,
        width: 20,
      } as DOMRect
    })
  const { container, unmount } = render(
    <Rate touchable allowHalf count={3} onTouchEnd={onTouchEnd} />
  )
  const root = container.querySelector('.nut-rate') as HTMLElement

  fireEvent.touchStart(root, { touches: [{ clientX: 0 }] })
  fireEvent.touchEnd(root, { changedTouches: [{ clientX: 31 }] })
  expect(onTouchEnd).toHaveBeenCalledWith(expect.anything(), 5)

  unmount()
  const disabled = render(
    <Rate touchable disabled count={3} onTouchEnd={onTouchEnd} />
  )
  const disabledRoot = disabled.container.querySelector(
    '.nut-rate'
  ) as HTMLElement
  fireEvent.touchStart(disabledRoot, { touches: [{ clientX: 60 }] })
  fireEvent.touchMove(disabledRoot, { touches: [{ clientX: 60 }] })
  fireEvent.touchEnd(disabledRoot, { changedTouches: [{ clientX: 60 }] })
  expect(onTouchEnd).toHaveBeenCalledTimes(1)
  getBoundingClientRect.mockRestore()
})

test('props test', () => {
  const state = {
    count: 7,
    defaultValue: 3,
    checkedIcon: <HeartFill />,
    uncheckedIcon: <Heart />,
  }

  const RateParent: React.FunctionComponent<any> = () => {
    const [score, setScore] = useState(state.defaultValue)

    const handleChange: (num: number) => void = (num: number) => {
      setScore(num)
    }
    return (
      <>
        <div className="score">{score}</div>
        <Rate
          count={state.count}
          defaultValue={state.defaultValue}
          checkedIcon={state.checkedIcon}
          uncheckedIcon={state.uncheckedIcon}
          onChange={handleChange}
        />
      </>
    )
  }

  const { container } = render(<RateParent />)
  const valueEl = container.querySelector('.score')
  const el = container.querySelectorAll('.nut-rate-item')
  if (el && valueEl) {
    expect(el.length).toBe(state.count)
    expect(el[2].childNodes[0]).toHaveClass('nut-rate-item-icon')
    expect(el[2].childNodes[0].childNodes[0]).toHaveClass('nut-icon-HeartFill')
    expect(el[3].childNodes[0]).toHaveClass('nut-rate-item-icon-disabled')
    expect(el[3].childNodes[0].childNodes[0]).toHaveClass('nut-icon-Heart')
    fireEvent.click(el[1])
    expect(valueEl.innerHTML).toBe('2')
  }
})

test('disabled test', () => {
  const { container } = render(<Rate disabled count={1} defaultValue={0} />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    fireEvent.click(el)
    expect(el.childNodes[0]).toHaveClass('nut-rate-item-icon-disabled')
  }
})

test('readOnly test', () => {
  const { container } = render(<Rate readOnly count={1} defaultValue={0} />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    fireEvent.click(el)
    expect(el.childNodes[0].childNodes[0]).toHaveClass('nut-icon-StarFill')
  }
})

test('allowHalf test', () => {
  const { container } = render(<Rate count={1} defaultValue={0.5} allowHalf />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    expect(el.childNodes[1]).toHaveClass(
      'nut-rate-item-icon nut-rate-item-icon-half'
    )
  }
})

test('size test', () => {
  const { container } = render(<Rate count={1} size="large" />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    expect(el).toHaveClass('nut-rate-item-large')
  }
  expect(container).toMatchSnapshot()
})

test('showScore test', () => {
  const { container } = render(<Rate count={1} showScore defaultValue={0.5} />)
  const el = container.querySelector('.nut-rate-score')
  if (el) {
    expect(el?.innerHTML).toBe('0.5')
  }
})

test('direction horizontal test', () => {
  const { container } = render(<Rate defaultValue={3} direction="horizontal" />)
  const root = container.querySelector('.nut-rate')
  expect(root).toHaveClass('nut-rate-horizontal')
  expect(container.querySelector('.nut-rate-list')).toBeTruthy()
})

test('direction vertical test', () => {
  const { container } = render(<Rate defaultValue={3} direction="vertical" />)
  const root = container.querySelector('.nut-rate')
  expect(root).toHaveClass('nut-rate-vertical')
})

test('label test horizontal', () => {
  const { container } = render(
    <Rate defaultValue={3} label="评分" direction="horizontal" />
  )
  const label = container.querySelector('.nut-rate-label')
  expect(label).toBeTruthy()
  expect(label?.innerHTML).toBe('评分')
  const root = container.querySelector('.nut-rate')
  const list = container.querySelector('.nut-rate-list')
  if (root && label && list) {
    const children = Array.from(root.children)
    expect(children.indexOf(label)).toBeLessThan(children.indexOf(list))
  }
})

test('label test vertical', () => {
  const { container } = render(
    <Rate defaultValue={3} label="非常满意" direction="vertical" />
  )
  const label = container.querySelector('.nut-rate-label')
  expect(label).toBeTruthy()
  expect(label?.innerHTML).toBe('非常满意')
  const root = container.querySelector('.nut-rate')
  const list = container.querySelector('.nut-rate-list')
  if (root && label && list) {
    const children = Array.from(root.children)
    expect(children.indexOf(label)).toBeGreaterThan(children.indexOf(list))
  }
})

test('array label test vertical', () => {
  const labels = ['不满意', '', '', '', '非常满意']
  const { container } = render(
    <Rate defaultValue={3} label={labels} direction="vertical" />
  )
  const labelsRow = container.querySelector('.nut-rate-labels')
  expect(labelsRow).toBeTruthy()
  const items = container.querySelectorAll('.nut-rate-labels-item')
  expect(items.length).toBe(5)
  expect(items[0].innerHTML).toBe('不满意')
  expect(items[4].innerHTML).toBe('非常满意')
})

test('touchable', () => {
  const state = {
    count: 5,
    defaultValue: 3,
  }

  const RateParent: React.FunctionComponent<any> = () => {
    const [score, setScore] = useState(state.defaultValue)

    const handleChange: (num: number) => void = (num: number) => {
      setScore(num)
    }
    return (
      <>
        <Rate
          touchable
          allowHalf
          count={state.count}
          defaultValue={state.defaultValue}
          onChange={handleChange}
        />
        <div className="score">{score}</div>
      </>
    )
  }

  const { container } = render(<RateParent />)
  const valueEl = container.querySelector('.score')
  const track = container.querySelector('.nut-rate')

  expect(valueEl?.innerHTML).toBe('3')

  if (track) {
    fireEvent.touchStart(track, {
      touches: [{ clientX: 0 }],
    })
    fireEvent.touchMove(track, {
      touches: [{ clientX: 0 }],
    })
    expect(valueEl?.innerHTML).toBe('0')

    fireEvent.touchStart(track, {
      touches: [{ clientX: 0 }],
    })
    fireEvent.touchMove(track, {
      touches: [{ clientX: 200 }],
    })
    expect(valueEl?.innerHTML).toBe('5')
  }
})
