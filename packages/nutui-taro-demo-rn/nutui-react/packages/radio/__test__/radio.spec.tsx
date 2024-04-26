import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useState } from 'react'
import { Checklist } from '@nutui/icons-react'
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
      'nut-radio-icon-disabled'
    )
  })

  test('radio checked', () => {
    const { container } = render(<Radio checked>Test Case</Radio>)
    expect(container.querySelector('.nut-icon')).toHaveClass(
      'nut-icon-CheckChecked'
    )
  })

  test('radio custom icon', () => {
    const { container } = render(
      <Radio icon={<Checklist />} activeIcon={<Checklist />}>
        自定义图标
      </Radio>
    )
    expect(container.querySelector('.nut-icon')).toHaveClass(
      'nut-icon-Checklist'
    )
  })

  test('radioGroup onChange toBeCalled', () => {
    const changeFn = vi.fn()
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

  test('Render radios by configuring options', () => {
    const RadioGroupOptions = () => {
      const [radioVal] = useState('1')
      const [optionsDemo1] = useState([
        {
          label: '选项一',
          value: '1',
        },
        {
          label: '选项二',
          value: '2',
          disabled: true,
        },
        {
          label: '选项三',
          value: '3',
        },
      ])
      return (
        <>
          <RadioGroup value={radioVal} options={optionsDemo1} />
        </>
      )
    }
    const { container } = render(<RadioGroupOptions />)
  })

  test('Render radios by shape', () => {
    const RadioGroupLast = () => {
      const [radioVal] = useState('1')
      return (
        <>
          <RadioGroup value={radioVal} shape="button">
            <Radio data-testid="shape-round" shape="round" value="1">
              选项1
            </Radio>
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
    const { container, getByTestId } = render(<RadioGroupLast />)
    expect(container.querySelectorAll('.nut-radio-button').length).toBe(3)
  })
})
