import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useState } from 'react'
import Radio from '@/packages/radio'
import RadioGroup from '@/packages/radiogroup'

describe('radio', () => {
  test('radio className', () => {
    const { container } = render(
      <Radio className="test-radio">Test Case</Radio>
    )
    expect(container.querySelector('.nut-radio')).toHaveClass('test-radio')
  })

  test('radio disable', () => {
    const { container } = render(<Radio disabled>Test Case</Radio>)
    expect(container.querySelector('.nut-icon')).toHaveClass(
      'nut-radio__icon--disable'
    )
  })

  test('radio checked', () => {
    const { container } = render(<Radio checked>Test Case</Radio>)
    expect(container.querySelector('.nut-icon')).toHaveClass(
      'nut-icon-check-checked'
    )
  })

  test('radio custom icon', () => {
    const { container } = render(
      <Radio iconName="checklist" iconActiveName="checklist">
        自定义图标
      </Radio>
    )
    expect(container.querySelector('.nut-icon')).toHaveClass(
      'nut-icon-checklist'
    )
  })

  test('radioGroup onChange toBeCalled', () => {
    const changeFn = jest.fn((e) => {
      console.log(e)
    })
    const RadioGroupLast = () => {
      const [radioVal] = useState('1')
      return (
        <>
          <RadioGroup value={radioVal} onChange={changeFn}>
            <Radio value="1">选项1</Radio>
            <Radio disabled value="2">
              选项2
            </Radio>
            <Radio value="3" data-testid="r3">
              选项3
            </Radio>
          </RadioGroup>
        </>
      )
    }
    const { container } = render(<RadioGroupLast />)
    fireEvent.click(screen.getByTestId('r3'))
    expect(changeFn).toBeCalledWith('3')
  })
})
