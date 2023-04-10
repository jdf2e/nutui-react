import * as React from 'react'
import { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Rate } from '../rate'

const publicCls =
  'nut-rate-item__icon nut-rate-item__icon--disabled nut-icon nutui-iconfont'
test('count & modelValue & checkedIcon & uncheckedIcon & readOnly & activeColor & voidColor & onChange test', () => {
  const state = {
    voidColor: 'rgb(250, 104, 93)',
    activeColor: 'red',
    count: 5,
    modelValue: 1,
    checkedIcon: 'star-fill-n',
    uncheckedIcon: 'star-n',
  }

  const RateParent: React.FunctionComponent<any> = () => {
    const [curModelValue, setCurModelValue] = useState(state.modelValue)

    const handleChange: (num: number) => void = (num: number) => {
      setCurModelValue(num)
    }
    return (
      <>
        <div className="curModelValue">{curModelValue}</div>
        <Rate
          voidColor={state.voidColor}
          activeColor={state.activeColor}
          count={state.count}
          modelValue={state.modelValue}
          checkedIcon={state.checkedIcon}
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
    expect(el[0].childNodes[0]).toHaveClass(
      // modelValue
      'nut-rate-item__icon nut-icon nutui-iconfont nut-icon-star-fill-n'
    )
    expect(el[0].childNodes[0]).toHaveAttribute(
      // activeColor && iconSize
      'style',
      'color: red; font-size: 18px; height: 18px; width: 18px;'
    )
    expect(el[1].childNodes[0]).toHaveClass(`${publicCls} nut-icon-star-n`)
    expect(el[1].childNodes[0]).toHaveAttribute(
      // voidColor
      'style',
      'color: rgb(250, 104, 93); font-size: 18px; height: 18px; width: 18px;'
    )

    fireEvent.click(el[1])
    expect(valueEl.innerHTML).toBe('2') // onChange api test
  }
})

test('disabled test', () => {
  const { container } = render(<Rate disabled count={1} modelValue={0} />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    fireEvent.click(el)
    expect(el.childNodes[0]).toHaveClass(`${publicCls} nut-icon-star-n`)
  }
})

test('readOnly  test', () => {
  const { container } = render(<Rate readOnly count={1} modelValue={0} />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    fireEvent.click(el)
    expect(el.childNodes[0]).toHaveClass(`${publicCls} nut-icon-star-n`)
  }
})

test('allowHalf  test', () => {
  const { container } = render(<Rate count={1} modelValue={0.5} allowHalf />)
  const el = container.querySelector('.nut-rate-item')
  if (el) {
    expect(el.childNodes[1]).toHaveClass(
      'nut-rate-item__icon nut-rate-item__icon--half nut-icon nutui-iconfont nut-icon-star-fill-n '
    )
  }
})
