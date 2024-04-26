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

  const { getByTestId, container } = render(<RateParent />)
  const valueEl = container.querySelector('.score')
  const el = container.querySelectorAll('.nut-rate-item')
  if (el && valueEl) {
    expect(el.length).toBe(state.count) // count
    expect(el[2].childNodes[0]).toHaveClass('nut-rate-item-icon') // active
    expect(el[2].childNodes[0].childNodes[0]).toHaveClass('nut-icon-HeartFill')
    expect(el[3].childNodes[0]).toHaveClass('nut-rate-item-icon-disabled') // disabled
    expect(el[3].childNodes[0].childNodes[0]).toHaveClass('nut-icon-Heart')
    fireEvent.click(el[1])
    expect(valueEl.innerHTML).toBe('2') // onChange
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
