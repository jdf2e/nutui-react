import React, { useState } from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Checkbox } from '../checkbox'
import { CheckboxGroup } from '../../checkboxgroup/checkboxgroup'

test('should match snapshot', () => {
  const { asFragment } = render(
    <Checkbox textPosition="left" label="复选框" checked />
  )
  expect(asFragment()).toMatchSnapshot()
})

test('should props correctly', () => {
  const handleChange = jest.fn(() => {})
  const { container, queryByText, getByTestId } = render(
    <Checkbox
      data-testid="checkbox"
      style={{ color: 'red' }}
      className="test"
      textPosition="left"
      label="复选框"
      onChange={handleChange}
      disabled
    />
  )
  expect(
    container.querySelector('.nut-checkbox__label--disabled')
  ).toBeInTheDocument()
  expect(getByTestId('checkbox')).toHaveClass('test')
  expect(getByTestId('checkbox')).toHaveStyle('color: red')
  expect(queryByText('复选框')).toBeInTheDocument()

  fireEvent.click(getByTestId('checkbox'))

  expect(handleChange).not.toBeCalled()
})

test('should fireEvent correctly', () => {
  const handleChange = jest.fn((value) => {
    value
  })
  const { getByTestId } = render(
    <CheckboxGroup
      data-testid="group"
      className="test"
      checkedValue={['1']}
      onChange={handleChange}
    >
      <Checkbox checked={false} label="1">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="2">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox" checked={false} label="3">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  )

  fireEvent.click(getByTestId('checkbox'))

  expect(handleChange).toBeCalled()
  expect(handleChange).toBeCalledWith(['1', '3'])

  expect(getByTestId('group')).toHaveClass('test')
})

test('Render checkboxs by configuring options', () => {
  const CheckboxGroupOptions = () => {
    const [checkedValue] = useState(['1'])
    const [optionsDemo1, setOptionsDemo1] = useState([
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
        <CheckboxGroup
          checkedValue={checkedValue}
          options={optionsDemo1}
        ></CheckboxGroup>
      </>
    )
  }
  const { container } = render(<CheckboxGroupOptions />)
})
