import * as React from 'react'
import { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HeartFill, Heart } from '@nutui/icons-react'
import { Rate } from '../rate'

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
