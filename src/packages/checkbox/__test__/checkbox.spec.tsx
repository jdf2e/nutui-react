import React, { useState } from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Checkbox } from '../checkbox'
import { CheckboxGroup } from '../../checkboxgroup/checkboxgroup'

test('should match snapshot', () => {
  const { asFragment } = render(
    <Checkbox labelPosition="left" label="复选框" checked />
  )
  expect(asFragment()).toMatchSnapshot()
})

test('should props correctly', () => {
  const handleChange = vi.fn(() => {})
  const { container, queryByText, getByTestId } = render(
    <Checkbox
      data-testid="checkbox"
      style={{ color: 'red' }}
      className="test"
      labelPosition="left"
      label="复选框"
      onChange={handleChange}
      disabled
    />
  )
  expect(
    container.querySelector('.nut-checkbox-label-disabled')
  ).toBeInTheDocument()
  expect(getByTestId('checkbox')).toHaveClass('test')
  expect(getByTestId('checkbox')).toHaveStyle('color: red')
  expect(queryByText('复选框')).toBeInTheDocument()

  fireEvent.click(getByTestId('checkbox'))

  expect(handleChange).not.toBeCalled()
})

test('should fireEvent correctly', () => {
  const handleChange = vi.fn((value) => {
    value
  })
  const limit = vi.fn()
  const { getByTestId, container } = render(
    <CheckboxGroup
      data-testid="group"
      className="test"
      defaultValue={['1']}
      max={3}
      min={1}
      onLimit={limit}
      onChange={handleChange}
    >
      <Checkbox data-testid="checkbox1" value="1">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox2" value="2">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox3" value="3">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox4" value="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  )

  fireEvent.click(getByTestId('checkbox3'))

  expect(handleChange).toBeCalled()
  expect(handleChange).toBeCalledWith(['1', '3'])

  expect(getByTestId('group')).toHaveClass('test')

  fireEvent.click(getByTestId('checkbox3'))
  fireEvent.click(getByTestId('checkbox1'))
  const icons = container.querySelectorAll('.nut-checkbox-icon-checked')
  expect(icons.length).toBe(1)
  expect(limit).toBeCalledWith('min')

  fireEvent.click(getByTestId('checkbox1'))
  fireEvent.click(getByTestId('checkbox2'))
  fireEvent.click(getByTestId('checkbox3'))
  fireEvent.click(getByTestId('checkbox4'))
  expect(limit).toBeCalledWith('max')
})

test('Render checkboxs by configuring options', () => {
  const CheckboxGroupOptions = () => {
    const [defaultValue] = useState(['1'])
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
        <CheckboxGroup defaultValue={defaultValue} options={optionsDemo1} />
      </>
    )
  }
  render(<CheckboxGroupOptions />)
})

test('Render checkboxs by configure indeterminate', () => {
  const { container } = render(
    <Checkbox value="1" checked label="labe1" indeterminate />
  )
  expect(
    container.querySelector('.nut-checkbox-icon-indeterminate')
  ).toBeTruthy()
})

test('Render checkboxs by configure disabled', () => {
  const { container } = render(
    <Checkbox value="1" checked label="labe1" disabled />
  )
  expect(container.querySelector('.nut-checkbox-icon-disabled')).toBeTruthy()
})

test('Render checkboxs by configure disabled and indeterminate', () => {
  const { container } = render(
    <Checkbox value="1" checked label="labe1" disabled indeterminate />
  )
  expect(
    container.querySelector('.nut-checkbox-icon-indeterminate')
  ).toBeTruthy()
  expect(
    container.querySelector('.nut-checkbox-icon-indeterminate')
  ).toHaveClass('nut-checkbox-icon-disabled')
})

test('list model should fireEvent correctly', () => {
  const handleChange = vi.fn((value) => {
    value
  })
  const limit = vi.fn()
  const { getByTestId, container } = render(
    <CheckboxGroup
      data-testid="group"
      className="test"
      defaultValue={['1']}
      max={3}
      min={1}
      list
      onLimit={limit}
      onChange={handleChange}
    >
      <Checkbox data-testid="checkbox1" value="1">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox2" value="2">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox3" value="3">
        组合复选框
      </Checkbox>
      <Checkbox data-testid="checkbox4" value="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  )

  fireEvent.click(getByTestId('checkbox3'))

  expect(handleChange).toBeCalled()
  expect(handleChange).toBeCalledWith(['1', '3'])

  expect(getByTestId('group')).toHaveClass('test')

  fireEvent.click(getByTestId('checkbox3'))
  fireEvent.click(getByTestId('checkbox1'))
  const icons = container.querySelectorAll('.nut-checkbox-icon-checked')
  expect(icons.length).toBe(1)
  expect(limit).toBeCalledWith('min')

  fireEvent.click(getByTestId('checkbox1'))
  fireEvent.click(getByTestId('checkbox2'))
  fireEvent.click(getByTestId('checkbox3'))
  fireEvent.click(getByTestId('checkbox4'))
  expect(limit).toBeCalledWith('max')
})
