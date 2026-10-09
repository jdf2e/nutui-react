import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useState } from 'react'
import { Check } from '@nutui/icons-react'
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
      <Radio
        icon={<Check className="test-class" />}
        activeIcon={<Check className="test-active-class" />}
      >
        自定义图标
      </Radio>
    )
    expect(container.querySelector('.nut-icon')).toHaveClass('test-class')
  })

  test('radio custom icon checked', () => {
    const { container } = render(
      <Radio
        defaultChecked
        icon={<Check className="test-class" />}
        activeIcon={<Check className="test-active-class" />}
      >
        自定义图标
      </Radio>
    )
    expect(container.querySelector('.nut-icon')).toHaveClass(
      'test-active-class'
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
    const handleChange = vi.fn()
    const optionsDemo1 = [
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
    ]
    const { container, getByText } = render(
      <RadioGroup
        defaultValue="1"
        options={optionsDemo1}
        onChange={handleChange}
      />
    )

    expect(getByText('选项一')).toBeInTheDocument()
    expect(getByText('选项二')).toBeInTheDocument()
    expect(getByText('选项三')).toBeInTheDocument()

    expect(container.querySelectorAll('.nut-icon-CheckChecked').length).toBe(1)
    expect(container.querySelectorAll('.nut-radio-icon-disabled').length).toBe(
      1
    )

    // Click disabled option 2
    fireEvent.click(getByText('选项二'))
    expect(handleChange).not.toBeCalled()

    // Click option 3
    fireEvent.click(getByText('选项三'))
    expect(handleChange).toBeCalledWith('3')
  })

  test('individual disabled takes precedence when group disabled is false', () => {
    const handleChange = vi.fn()
    const { getByTestId } = render(
      <RadioGroup disabled={false} onChange={handleChange}>
        <Radio data-testid="r1" value="1">
          选项1
        </Radio>
        <Radio data-testid="r2" value="2" disabled>
          选项2
        </Radio>
      </RadioGroup>
    )

    fireEvent.click(getByTestId('r2'))
    expect(handleChange).not.toBeCalled()

    fireEvent.click(getByTestId('r1'))
    expect(handleChange).toBeCalledWith('1')
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
