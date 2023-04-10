import * as React from 'react'
import { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HeartFill, Heart1 } from '@nutui/icons-react'
import { Rate } from '../rate'

test('count & defaultValue & checkedIcon & uncheckedIcon & readOnly & onChange test', () => {
  const state = {
    count: 5,
    defaultValue: 1,
    checkedIcon: <HeartFill />,
    uncheckedIcon: <Heart1 />,
  }

  const RateParent: React.FunctionComponent<any> = () => {
    const [curModelValue, setCurModelValue] = useState(state.defaultValue)

    const handleChange: (num: number) => void = (num: number) => {
      setCurModelValue(num)
    }
    return (
      <>
        <div className="curModelValue">{curModelValue}</div>
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
  const valueEl = container.querySelector('.curModelValue')
  const el = container.querySelectorAll('.nut-rate-item')
  if (el && valueEl) {
    expect(el.length).toBe(state.count) // count
    expect(el[0].childNodes[0]).toHaveClass('nut-rate-item__icon')
    expect(el[0].childNodes[0].childNodes[0]).toHaveClass('nut-icon-HeartFill')
    expect(el[1].childNodes[0]).toHaveClass('nut-rate-item__icon--disabled')
    expect(el[1].childNodes[0].childNodes[0]).toHaveClass('nut-icon-Heart1')

    fireEvent.click(el[1])
    expect(valueEl.innerHTML).toBe('2') // onChange api test
  }
})

test('disabled test', () => {
  const { container } = render(<Rate disabled count={1} defaultValue={0} />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    fireEvent.click(el)
    expect(el.childNodes[0]).toHaveClass('nut-rate-item__icon--disabled')
  }
})

test('readOnly  test', () => {
  const { container } = render(<Rate readOnly count={1} defaultValue={0} />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    fireEvent.click(el)
    expect(el.childNodes[0].childNodes[0]).toHaveClass('nut-icon-StarFillN')
  }
})

test('allowHalf  test', () => {
  const { container } = render(<Rate count={1} defaultValue={0.5} allowHalf />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    expect(el.childNodes[1]).toHaveClass(
      'nut-rate-item__icon nut-rate-item__icon--half'
    )
  }
})
